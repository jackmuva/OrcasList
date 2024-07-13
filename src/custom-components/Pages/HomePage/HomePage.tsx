import TasksCreateForm from "../../../../ui-components/TasksCreateForm";
import TaskCard from "../../reusable-components/TaskCard/TaskCard";
import {useEffect, useState} from "react";
import User from "../../../model/User";
import {useAppDispatch, useAppSelector} from "../../../redux/hook";
import {selectTask, setTask} from "../../../redux/features/taskSlice";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../amplify/data/resource";

const client = generateClient<Schema>();
function HomePage(user: User){
    const taskState = useAppSelector(selectTask);
    const dispatch = useAppDispatch();
    const [openTaskForm, setOpenTaskForm] = useState(false);

    useEffect(() => {
        client.models.Tasks.observeQuery().subscribe({
            next: (data) => {
                dispatch(setTask(data.items));
            }
        })
    }, []);

    function toggleForm() {
        setOpenTaskForm(!openTaskForm);
    }

    return(
        <div>
            <h1>{user?.username}'s todos</h1>
            <button onClick={toggleForm}>+ Add new task</button>
            {openTaskForm && <TasksCreateForm></TasksCreateForm>}
            <ul className = "w-96">
                {taskState.tasks.map((elem) => (
                    <TaskCard
                        id = {elem.id ?? ""}
                        task = {elem.task}
                        lastCompletedDate = {elem.lastCompletedDate ?? ""}
                        howOften = {elem.howOften}
                        unitOfTime = {elem.unitOfTime ?? ""}
                        key={elem.id} />
                ))}
            </ul>
        </div>
    );
}
export default HomePage;