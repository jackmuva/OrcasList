import TaskCard from "../../reusable-components/TaskCard/TaskCard";
import {useEffect, useState} from "react";
import User from "../../../model/User";
import {useAppDispatch, useAppSelector} from "../../../redux/hook";
import {selectTask, setTask} from "../../../redux/features/taskSlice";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../amplify/data/resource";
import CreateTaskDropdown from "../../reusable-components/CreateTaskDropdown/CreateTaskDropdown";
import CreateCatDropdown from "../../reusable-components/CreateCatDropdown/CreateCatDropdown";

const client = generateClient<Schema>();
function HomePage(user: User){
    const taskState = useAppSelector(selectTask);
    const dispatch = useAppDispatch();
    const [openTaskForm, setOpenTaskForm] = useState(false);
    const [openCatForm, setOpenCatForm] = useState(false);

    useEffect(() => {
        client.models.Tasks.observeQuery().subscribe({
            next: (data) => {
                dispatch(setTask(data.items));
            }
        })
    }, []);

    function toggleTaskForm() {
        if(openCatForm){
            setOpenCatForm(false);
        }
        setOpenTaskForm(!openTaskForm);
    }

    function parseEmail(email: string){
        return email.split("@")[0];
    }

    function toggleCatForm() {
        if(openTaskForm){
            setOpenTaskForm(false);
        }
        setOpenCatForm(!openCatForm)
    }

    return(
        <div className="flex-col text-center overflow-x-hidden">
            <h1 className="mb-4 text-blue-800 text-4xl font-bold font-mono">
                {parseEmail(user?.username)}'s Tasks
            </h1>
            <div className="flex">
                <button className="w-1/2 mx-2 bg-indigo-200 text-blue-800 border-2 border-blue-800
                                    hover:bg-indigo-100 hover:border-white"
                        onClick={toggleTaskForm}>
                    + Add new task
                </button>
                <button className="w-1/2 mx-2 bg-indigo-900 text-white border-2 border-white
                                    hover:bg-indigo-700" onClick={toggleCatForm}>
                    + Create new category
                </button>
            </div>
            {openTaskForm && <CreateTaskDropdown />}
            {openCatForm && <CreateCatDropdown />}
            <ul>
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