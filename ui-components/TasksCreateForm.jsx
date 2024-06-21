/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTasks } from "./graphql/mutations";
const client = generateClient();
export default function TasksCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    task: "",
    lastCompletedDate: "",
    howOften: "",
    unitOfTime: "",
  };
  const [task, setTask] = React.useState(initialValues.task);
  const [lastCompletedDate, setLastCompletedDate] = React.useState(
    initialValues.lastCompletedDate
  );
  const [howOften, setHowOften] = React.useState(initialValues.howOften);
  const [unitOfTime, setUnitOfTime] = React.useState(initialValues.unitOfTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTask(initialValues.task);
    setLastCompletedDate(initialValues.lastCompletedDate);
    setHowOften(initialValues.howOften);
    setUnitOfTime(initialValues.unitOfTime);
    setErrors({});
  };
  const validations = {
    task: [{ type: "Required" }],
    lastCompletedDate: [],
    howOften: [{ type: "Required" }],
    unitOfTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          task,
          lastCompletedDate,
          howOften,
          unitOfTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createTasks.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TasksCreateForm")}
      {...rest}
    >
      <TextField
        label="Task"
        isRequired={true}
        isReadOnly={false}
        value={task}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task: value,
              lastCompletedDate,
              howOften,
              unitOfTime,
            };
            const result = onChange(modelFields);
            value = result?.task ?? value;
          }
          if (errors.task?.hasError) {
            runValidationTasks("task", value);
          }
          setTask(value);
        }}
        onBlur={() => runValidationTasks("task", task)}
        errorMessage={errors.task?.errorMessage}
        hasError={errors.task?.hasError}
        {...getOverrideProps(overrides, "task")}
      ></TextField>
      <TextField
        label="Last completed date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={lastCompletedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              lastCompletedDate: value,
              howOften,
              unitOfTime,
            };
            const result = onChange(modelFields);
            value = result?.lastCompletedDate ?? value;
          }
          if (errors.lastCompletedDate?.hasError) {
            runValidationTasks("lastCompletedDate", value);
          }
          setLastCompletedDate(value);
        }}
        onBlur={() =>
          runValidationTasks("lastCompletedDate", lastCompletedDate)
        }
        errorMessage={errors.lastCompletedDate?.errorMessage}
        hasError={errors.lastCompletedDate?.hasError}
        {...getOverrideProps(overrides, "lastCompletedDate")}
      ></TextField>
      <TextField
        label="How often"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={howOften}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              task,
              lastCompletedDate,
              howOften: value,
              unitOfTime,
            };
            const result = onChange(modelFields);
            value = result?.howOften ?? value;
          }
          if (errors.howOften?.hasError) {
            runValidationTasks("howOften", value);
          }
          setHowOften(value);
        }}
        onBlur={() => runValidationTasks("howOften", howOften)}
        errorMessage={errors.howOften?.errorMessage}
        hasError={errors.howOften?.hasError}
        {...getOverrideProps(overrides, "howOften")}
      ></TextField>
      <SelectField
        label="Unit of time"
        placeholder="Please select an option"
        isDisabled={false}
        value={unitOfTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              lastCompletedDate,
              howOften,
              unitOfTime: value,
            };
            const result = onChange(modelFields);
            value = result?.unitOfTime ?? value;
          }
          if (errors.unitOfTime?.hasError) {
            runValidationTasks("unitOfTime", value);
          }
          setUnitOfTime(value);
        }}
        onBlur={() => runValidationTasks("unitOfTime", unitOfTime)}
        errorMessage={errors.unitOfTime?.errorMessage}
        hasError={errors.unitOfTime?.hasError}
        {...getOverrideProps(overrides, "unitOfTime")}
      >
        <option
          children="Days"
          value="days"
          {...getOverrideProps(overrides, "unitOfTimeoption0")}
        ></option>
        <option
          children="Months"
          value="months"
          {...getOverrideProps(overrides, "unitOfTimeoption1")}
        ></option>
        <option
          children="Years"
          value="years"
          {...getOverrideProps(overrides, "unitOfTimeoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
