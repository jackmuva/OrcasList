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
        taskLogId
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
