/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTaskDetails } from "./graphql/queries";
import { updateTaskDetails } from "./graphql/mutations";
const client = generateClient();
export default function TaskDetailsUpdateForm(props) {
  const {
    id: idProp,
    taskDetails: taskDetailsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    taskDescriptionId: "",
    notes: "",
  };
  const [taskDescriptionId, setTaskDescriptionId] = React.useState(
    initialValues.taskDescriptionId
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskDetailsRecord
      ? { ...initialValues, ...taskDetailsRecord }
      : initialValues;
    setTaskDescriptionId(cleanValues.taskDescriptionId);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [taskDetailsRecord, setTaskDetailsRecord] =
    React.useState(taskDetailsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTaskDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTaskDetails
        : taskDetailsModelProp;
      setTaskDetailsRecord(record);
    };
    queryData();
  }, [idProp, taskDetailsModelProp]);
  React.useEffect(resetStateValues, [taskDetailsRecord]);
  const validations = {
    taskDescriptionId: [],
    notes: [],
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
          taskDescriptionId: taskDescriptionId ?? null,
          notes: notes ?? null,
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
            query: updateTaskDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: taskDetailsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TaskDetailsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Task description id"
        isRequired={false}
        isReadOnly={false}
        value={taskDescriptionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskDescriptionId: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.taskDescriptionId ?? value;
          }
          if (errors.taskDescriptionId?.hasError) {
            runValidationTasks("taskDescriptionId", value);
          }
          setTaskDescriptionId(value);
        }}
        onBlur={() =>
          runValidationTasks("taskDescriptionId", taskDescriptionId)
        }
        errorMessage={errors.taskDescriptionId?.errorMessage}
        hasError={errors.taskDescriptionId?.hasError}
        {...getOverrideProps(overrides, "taskDescriptionId")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskDescriptionId,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || taskDetailsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || taskDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
