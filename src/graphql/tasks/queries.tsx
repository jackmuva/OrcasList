

export const getAllTasks = /* GraphQL */ `
    query{
        allTasks {
            task
            lastCompletedDate
            howOften
            unitOfTime
            taskLogs {
                id
                taskId
                notes
                completionDate
            }
        }
    }
`;