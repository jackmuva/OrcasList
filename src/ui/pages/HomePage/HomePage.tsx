import TaskCard from "../../components/TaskCard/TaskCard";
import {useEffect, useState} from "react";
import User from "../../../model/User";
import {useAppDispatch, useAppSelector} from "../../../redux/hook";
import {selectTask, setTask} from "../../../redux/features/taskSlice";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../amplify/data/resource";
import CreateTaskDropdown from "../../components/CreateTaskDropdown/CreateTaskDropdown";
import CreateCatDropdown from "../../components/CreateCatDropdown/CreateCatDropdown";
import {selectCategory, setCategories} from "../../../redux/features/categorySlice";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const client = generateClient<Schema>();

function HomePage(user: User){
    const taskState = useAppSelector(selectTask);
    const categoryState = useAppSelector(selectCategory);
    const dispatch = useAppDispatch();
    const [openTaskForm, setOpenTaskForm] = useState(false);
    const [openCatForm, setOpenCatForm] = useState(false);
    const [newOne, setNewOne] = useState(false);

    useEffect(() => {
        client.models.Tasks.observeQuery().subscribe({
            next: (data) => {
                dispatch(setTask(data.items));
            }
        })
    }, [newOne]);

    useEffect(() => {
        client.models.Categories.observeQuery().subscribe({
            next: (data) => {
                dispatch(setCategories(data.items));
            }
        })
    }, [newOne]);


    function parseEmail(email: string){
        return email.split("@")[0];
    }

    function toggleNewOne(){
        setNewOne(!newOne);
    }

    function toggleTaskForm() {
        if(openCatForm){
            setOpenCatForm(false);
        }
        setOpenTaskForm(!openTaskForm);
    }

    function toggleCatForm() {
        if(openTaskForm){
            setOpenTaskForm(false);
        }
        setOpenCatForm(!openCatForm)
    }

    return(
        <div className="flex-col place-self-center text-center overflow-x-hidden w-11/12 md:w-[40rem]">
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
            {openTaskForm && <CreateTaskDropdown toggleTaskForm = {toggleTaskForm} toggleNewOne = {toggleNewOne}/>}
            {openCatForm && <CreateCatDropdown toggleCatForm = {toggleCatForm} toggleNewOne = {toggleNewOne} />}
            <div className="my-2 flex flex-col space-y-1">
                {categoryState.categories.map((elem) => (
                    <CategoryCard id={elem.id} category={elem.category ?? ""} />
                ))}
            </div>
            <div className="my-4 flex flex-col space-y-1">
            {taskState.tasks.map((elem) => (
                <TaskCard
                    id = {elem.id ?? ""}
                    task = {elem.task}
                    lastCompletedDate = {elem.lastCompletedDate ?? ""}
                    nextDate = {elem.nextDate ?? ""}
                    howOften = {elem.howOften}
                    unitOfTime = {elem.unitOfTime ?? ""}
                    key={elem.id} />
            ))}
            </div>
        </div>
    );
}
export default HomePage;