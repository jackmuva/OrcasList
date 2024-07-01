/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaskLogs = /* GraphQL */ `
  query GetTaskLogs($id: ID!) {
    getTaskLogs(id: $id) {
      attachmentPath
      completionData
      createdAt
      id
      notes
      owner
      task {
        nextToken
        __typename
      }
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
      taskLogs {
        attachmentPath
        completionData
        createdAt
        id
        notes
        owner
        updatedAt
        __typename
      }
      unitOfTime
      updatedAt
      __typename
    }
  }
`;
export const listTaskLogs = /* GraphQL */ `
  query ListTaskLogs(
    $filter: ModelTaskLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        attachmentPath
        completionData
        createdAt
        id
        notes
        owner
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
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTasks(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        howOften
        id
        lastCompletedDate
        owner
        task
        unitOfTime
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
