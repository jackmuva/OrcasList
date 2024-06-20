/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTaskDetails = /* GraphQL */ `
  subscription OnCreateTaskDetails(
    $filter: ModelSubscriptionTaskDetailsFilterInput
    $owner: String
  ) {
    onCreateTaskDetails(filter: $filter, owner: $owner) {
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
      taskDescriptionId
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
        createdAt
        id
        notes
        owner
        taskDescriptionId
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
export const onDeleteTaskDetails = /* GraphQL */ `
  subscription OnDeleteTaskDetails(
    $filter: ModelSubscriptionTaskDetailsFilterInput
    $owner: String
  ) {
    onDeleteTaskDetails(filter: $filter, owner: $owner) {
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
      taskDescriptionId
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
        createdAt
        id
        notes
        owner
        taskDescriptionId
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
export const onUpdateTaskDetails = /* GraphQL */ `
  subscription OnUpdateTaskDetails(
    $filter: ModelSubscriptionTaskDetailsFilterInput
    $owner: String
  ) {
    onUpdateTaskDetails(filter: $filter, owner: $owner) {
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
      taskDescriptionId
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
        createdAt
        id
        notes
        owner
        taskDescriptionId
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
