/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTaskDetails = /* GraphQL */ `
  mutation CreateTaskDetails(
    $condition: ModelTaskDetailsConditionInput
    $input: CreateTaskDetailsInput!
  ) {
    createTaskDetails(condition: $condition, input: $input) {
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
export const deleteTaskDetails = /* GraphQL */ `
  mutation DeleteTaskDetails(
    $condition: ModelTaskDetailsConditionInput
    $input: DeleteTaskDetailsInput!
  ) {
    deleteTaskDetails(condition: $condition, input: $input) {
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
export const updateTaskDetails = /* GraphQL */ `
  mutation UpdateTaskDetails(
    $condition: ModelTaskDetailsConditionInput
    $input: UpdateTaskDetailsInput!
  ) {
    updateTaskDetails(condition: $condition, input: $input) {
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
