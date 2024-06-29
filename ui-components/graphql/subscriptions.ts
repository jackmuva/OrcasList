/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTaskLogs = /* GraphQL */ `
  subscription OnCreateTaskLogs(
    $filter: ModelSubscriptionTaskLogsFilterInput
    $owner: String
  ) {
    onCreateTaskLogs(filter: $filter, owner: $owner) {
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
      updatedAt
      __typename
    }
  }
`;
export const onCreateTasks = /* GraphQL */ `
  subscription OnCreateTasks(
    $filter: ModelSubscriptionTasksFilterInput
    $owner: String
  ) {
    onCreateTasks(filter: $filter, owner: $owner) {
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
export const onDeleteTaskLogs = /* GraphQL */ `
  subscription OnDeleteTaskLogs(
    $filter: ModelSubscriptionTaskLogsFilterInput
    $owner: String
  ) {
    onDeleteTaskLogs(filter: $filter, owner: $owner) {
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
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTasks = /* GraphQL */ `
  subscription OnDeleteTasks(
    $filter: ModelSubscriptionTasksFilterInput
    $owner: String
  ) {
    onDeleteTasks(filter: $filter, owner: $owner) {
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
export const onUpdateTaskLogs = /* GraphQL */ `
  subscription OnUpdateTaskLogs(
    $filter: ModelSubscriptionTaskLogsFilterInput
    $owner: String
  ) {
    onUpdateTaskLogs(filter: $filter, owner: $owner) {
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
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTasks = /* GraphQL */ `
  subscription OnUpdateTasks(
    $filter: ModelSubscriptionTasksFilterInput
    $owner: String
  ) {
    onUpdateTasks(filter: $filter, owner: $owner) {
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
