import TasksCreateForm from "../../../../ui-components/TasksCreateForm";
import TaskCard from "../../reusable-components/TaskCard/TaskCard";
import {useEffect, useState} from "react";
import {Schema} from "../../../../amplify/data/resource";
import User from "../../../model/User";
import TaskService from "../../../services/TaskService";

function HomePage(user: User){
    const [tasks, setTasks] = useState<Array<Schema["Tasks"]["type"]>>([]);
    const [openTaskForm, setOpenTaskForm] = useState(false);

    useEffect(() => {
        TaskService.getAll().then((data) => {
            setTasks(data);
        });
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
                {tasks.map((elem) => (
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