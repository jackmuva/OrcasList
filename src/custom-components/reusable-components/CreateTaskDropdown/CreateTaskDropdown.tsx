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

    const handleSubmit = async() => {
        await client.models.Tasks.create({
            taskId: uuidv4(),
            task: task,
            lastCompletedDate: lastCompletedDate,
            howOften: parseInt(howOften),
            unitOfTime: UnitOfTimeEnum[unitOfTime as keyof typeof UnitOfTimeEnum]
        })
    }

    return(
        <div>
            <form>
                <label>
                    <input type = "text" value = {task}
                           onChange={(e) => {setTask(e.target.value)}} />
                </label>
                <label>
                    <input type = "date" value = {lastCompletedDate}
                           onChange={(e) => {setLastCompletedDate(e.target.value)}} />
                </label>
                <label>
                    <input type = "number" value = {howOften} min="1"
                           onChange={(e) => {setHowOften(e.target.value)}} />
                </label>
                <label>
                    <select name="unitOfTime" onChange={(e) => {setUnitOfTime(e.target.value)}}>
                        <option selected value={UnitOfTimeEnum.days.valueOf()}>days</option>
                        <option value={UnitOfTimeEnum.months.valueOf()}>months</option>
                        <option value={UnitOfTimeEnum.years.valueOf()}>years</option>
                    </select>
                 </label>
            </form>
            <button onClick={() => handleSubmit()}>
                Create Task
            </button>
        </div>
    );
}
export default CreateTaskDropdown;