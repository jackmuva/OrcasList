import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {Schema} from "../../../../amplify/data/resource";
import {generateClient} from "aws-amplify/api";
import UnitOfTimeEnum from "../../../model/UnitOfTimeEnum";

const client = generateClient<Schema>();
function CreateTaskDropdown(){
    const [task, setTask] = useState("");
    const [lastCompletedDate, setLastCompletedDate] = useState("");
    const [howOften, setHowOften] = useState("");
    const [unitOfTime, setUnitOfTime] = useState(UnitOfTimeEnum.days.valueOf());
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async() => {
        if(task === "" || lastCompletedDate === "" || howOften === "" || unitOfTime === ""){
            setErrorMessage("Fields cannot be blank")
        }
        await client.models.Tasks.create({
            taskId: uuidv4(),
            task: task,
            lastCompletedDate: lastCompletedDate,
            howOften: parseInt(howOften),
            unitOfTime: UnitOfTimeEnum[unitOfTime as keyof typeof UnitOfTimeEnum]
        })
    }

    return(
        <div className="mt-4 flex flex-col overflow-x-hidden overflow-y-hidden place-items-center">
            <form className="flex flex-col space-y-2">
                <label className="font-mono font-bold text-blue-800">
                    Task Name:
                    <input className="mx-2 rounded-md border-2 border-indigo-800 px-2"
                        type = "text" value = {task}
                           onChange={(e) => {setTask(e.target.value)}} />
                </label>
                <label className="font-mono font-bold text-blue-800">
                    Date Completed:
                    <input className="mx-2 rounded-md border-2 border-indigo-800 px-2"
                           type = "date" value = {lastCompletedDate}
                           onChange={(e) => {setLastCompletedDate(e.target.value)}} />
                </label>

                <label className="font-mono font-bold text-blue-800">
                    How Often:
                    <input className="mx-2 rounded-md border-2 border-indigo-800 px-2"
                           type = "number" value = {howOften} min="1"
                           onChange={(e) => {setHowOften(e.target.value)}} />
                    <select className="rounded-md border-2 border-indigo-800 px-2"
                            name="unitOfTime" onChange={(e) => {setUnitOfTime(e.target.value)}}>
                        <option selected value={UnitOfTimeEnum.days.valueOf()}>days</option>
                        <option value={UnitOfTimeEnum.months.valueOf()}>months</option>
                        <option value={UnitOfTimeEnum.years.valueOf()}>years</option>
                    </select>
                </label>
            </form>
            <div className="font-bold text-red-800 text-lg">
                {errorMessage}
            </div>
            <button className="m-2 w-fit py-1 text-blue-800 bg-blue-100 font-bold border-2 border-blue-800
                                hover:border-4" onClick={() => handleSubmit()}>
                Create Task
            </button>
        </div>
    );
}
export default CreateTaskDropdown;