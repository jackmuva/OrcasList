import Task from "./Task.tsx";

export default interface Category {
    id: string,
    category:string,
    tasks?:Task[]
}