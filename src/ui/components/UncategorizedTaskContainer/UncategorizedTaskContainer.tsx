import TaskCard from "../TaskCard/TaskCard.tsx";
import {useEffect} from "react";
import {selectTask, setTask} from "../../../redux/features/taskSlice.tsx";
import {useAppDispatch, useAppSelector} from "../../../redux/hook.tsx";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../amplify/data/resource.ts";
import {useDroppable} from "@dnd-kit/core";

const client = generateClient<Schema>();

export default function UncategorizedTaskContainer({rerenderBoolean} : {rerenderBoolean: boolean}) {
    const taskState = useAppSelector(selectTask);
    const dispatch = useAppDispatch();
    const {isOver, setNodeRef} = useDroppable({id: "Uncategorized"});

    useEffect(() => {
        client.models.Tasks.observeQuery({
            filter: {
                categoryId: {
                    eq: "Uncategorized"}
            }
        }).subscribe({
            next: (data) => {
                dispatch(setTask(data.items));
            }
        })
    }, [rerenderBoolean]);

    const style = {
        color: isOver ? 'green' : undefined,
    };

    return(
        <div ref={setNodeRef} style={style}>
            {taskState.tasks.map((elem) => (
                <TaskCard
                    id = {elem.id ?? ""}
                    task = {elem.task}
                    lastCompletedDate = {elem.lastCompletedDate ?? ""}
                    nextDate = {elem.nextDate ?? ""}
                    howOften = {elem.howOften}
                    unitOfTime = {elem.unitOfTime ?? ""}
                    key={elem.id}
                    categoryId={elem.categoryId ?? ""}
                />
            ))}
        </div>
    );
}