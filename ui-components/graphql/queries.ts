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
      taskId
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
        nextToken
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
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTaskLogs(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        attachmentPath
        completionData
        createdAt
        id
        notes
        owner
        taskId
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
        unitOfTime
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
