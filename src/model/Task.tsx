interface Task {
    id: string,
    categoryId: string,
    task: string,
    lastCompletedDate: string,
    nextDate: string,
    howOften: number,
    unitOfTime: string,
}

export default Task;