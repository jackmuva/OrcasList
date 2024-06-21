/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTaskLogs = /* GraphQL */ `
  mutation CreateTaskLogs(
    $condition: ModelTaskLogsConditionInput
    $input: CreateTaskLogsInput!
  ) {
    createTaskLogs(condition: $condition, input: $input) {
      attachmentPath
      completionData
      createdAt
      id
      notes
      owner
      task {
        createdAt
        howOften
        id
        lastCompletedDate
        owner
        task
        taskId
        unitOfTime
        updatedAt
        __typename
      }
      taskLogId
      updatedAt
      __typename
    }
  }
`;
export const createTasks = /* GraphQL */ `
  mutation CreateTasks(
    $condition: ModelTasksConditionInput
    $input: CreateTasksInput!
  ) {
    createTasks(condition: $condition, input: $input) {
      createdAt
      howOften
      id
      lastCompletedDate
      owner
      task
      taskDetails {
        attachmentPath
        completionData
        createdAt
        id
        notes
        owner
        taskLogId
        updatedAt
        __typename
      }
      taskId
      unitOfTime
      updatedAt
      __typename
    }
  }
`;
export const deleteTaskLogs = /* GraphQL */ `
  mutation DeleteTaskLogs(
    $condition: ModelTaskLogsConditionInput
    $input: DeleteTaskLogsInput!
  ) {
    deleteTaskLogs(condition: $condition, input: $input) {
      attachmentPath
      completionData
      createdAt
      id
      notes
      owner
      task {
        createdAt
        howOften
        id
        lastCompletedDate
        owner
        task
        taskId
        unitOfTime
        updatedAt
        __typename
      }
      taskLogId
      updatedAt
      __typename
    }
  }
`;
export const deleteTasks = /* GraphQL */ `
  mutation DeleteTasks(
    $condition: ModelTasksConditionInput
    $input: DeleteTasksInput!
  ) {
    deleteTasks(condition: $condition, input: $input) {
      createdAt
      howOften
      id
      lastCompletedDate
      owner
      task
      taskDetails {
        attachmentPath
        completionData
        createdAt
        id
        notes
        owner
        taskLogId
        updatedAt
        __typename
      }
      taskId
      unitOfTime
      updatedAt
      __typename
    }
  }
`;
export const updateTaskLogs = /* GraphQL */ `
  mutation UpdateTaskLogs(
    $condition: ModelTaskLogsConditionInput
    $input: UpdateTaskLogsInput!
  ) {
    updateTaskLogs(condition: $condition, input: $input) {
      attachmentPath
      completionData
      createdAt
      id
      notes
      owner
      task {
        createdAt
        howOften
        id
        lastCompletedDate
        owner
        task
        taskId
        unitOfTime
        updatedAt
        __typename
      }
      taskLogId
      updatedAt
      __typename
    }
  }
`;
export const updateTasks = /* GraphQL */ `
  mutation UpdateTasks(
    $condition: ModelTasksConditionInput
    $input: UpdateTasksInput!
  ) {
    updateTasks(condition: $condition, input: $input) {
      createdAt
      howOften
      id
      lastCompletedDate
      owner
      task
      taskDetails {
        attachmentPath
        completionData
        createdAt
        id
        notes
        owner
        taskLogId
        updatedAt
        __typename
      }
      taskId
      unitOfTime
      updatedAt
      __typename
    }
  }
`;
