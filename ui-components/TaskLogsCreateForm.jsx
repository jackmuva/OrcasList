/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTaskLogs } from "./graphql/mutations";
const client = generateClient();
export default function TaskLogsCreateForm(props) {
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
    taskLogId: "",
    notes: "",
    completionData: "",
    attachmentPath: "",
  };
  const [taskLogId, setTaskLogId] = React.useState(initialValues.taskLogId);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [completionData, setCompletionData] = React.useState(
    initialValues.completionData
  );
  const [attachmentPath, setAttachmentPath] = React.useState(
    initialValues.attachmentPath
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTaskLogId(initialValues.taskLogId);
    setNotes(initialValues.notes);
    setCompletionData(initialValues.completionData);
    setAttachmentPath(initialValues.attachmentPath);
    setErrors({});
  };
  const validations = {
    taskLogId: [],
    notes: [],
    completionData: [],
    attachmentPath: [],
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
          taskLogId,
          notes,
          completionData,
          attachmentPath,
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
            query: createTaskLogs.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TaskLogsCreateForm")}
      {...rest}
    >
      <TextField
        label="Task log id"
        isRequired={false}
        isReadOnly={false}
        value={taskLogId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskLogId: value,
              notes,
              completionData,
              attachmentPath,
            };
            const result = onChange(modelFields);
            value = result?.taskLogId ?? value;
          }
          if (errors.taskLogId?.hasError) {
            runValidationTasks("taskLogId", value);
          }
          setTaskLogId(value);
        }}
        onBlur={() => runValidationTasks("taskLogId", taskLogId)}
        errorMessage={errors.taskLogId?.errorMessage}
        hasError={errors.taskLogId?.hasError}
        {...getOverrideProps(overrides, "taskLogId")}
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
              taskLogId,
              notes: value,
              completionData,
              attachmentPath,
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
      <TextField
        label="Completion data"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={completionData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskLogId,
              notes,
              completionData: value,
              attachmentPath,
            };
            const result = onChange(modelFields);
            value = result?.completionData ?? value;
          }
          if (errors.completionData?.hasError) {
            runValidationTasks("completionData", value);
          }
          setCompletionData(value);
        }}
        onBlur={() => runValidationTasks("completionData", completionData)}
        errorMessage={errors.completionData?.errorMessage}
        hasError={errors.completionData?.hasError}
        {...getOverrideProps(overrides, "completionData")}
      ></TextField>
      <TextField
        label="Attachment path"
        isRequired={false}
        isReadOnly={false}
        value={attachmentPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taskLogId,
              notes,
              completionData,
              attachmentPath: value,
            };
            const result = onChange(modelFields);
            value = result?.attachmentPath ?? value;
          }
          if (errors.attachmentPath?.hasError) {
            runValidationTasks("attachmentPath", value);
          }
          setAttachmentPath(value);
        }}
        onBlur={() => runValidationTasks("attachmentPath", attachmentPath)}
        errorMessage={errors.attachmentPath?.errorMessage}
        hasError={errors.attachmentPath?.hasError}
        {...getOverrideProps(overrides, "attachmentPath")}
      ></TextField>
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
