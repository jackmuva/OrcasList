/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaskDetails = /* GraphQL */ `
  query GetTaskDetails($id: ID!) {
    getTaskDetails(id: $id) {
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
export const getTasks = /* GraphQL */ `
  query GetTasks($id: ID!) {
    getTasks(id: $id) {
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
export const listTaskDetails = /* GraphQL */ `
  query ListTaskDetails(
    $filter: ModelTaskDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        notes
        owner
        taskDescriptionId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
