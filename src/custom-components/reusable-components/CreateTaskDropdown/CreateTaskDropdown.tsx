import {useState} from "react";
import {generateClient} from "aws-amplify/src/api";
import {Schema} from "../../../../amplify/data/resource";

const client = generateClient<Schema>();
function CreateTaskDropdown(){
    const [task, setTask] = useState("");
    const [lastCompletedDate, setLastCompletedDate] = useState("");
    const [howOften, setHowOften] = useState("");
    const [unitOfTime, setUnitOfTime] = useState("");

    function handleSubmit(){
        const { data: newTask } = await client.models.Tasks.create({

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
                        <option value="days">days</option>
                        <option value="months">months</option>
                        <option value="years">years</option>
                    </select>
                 </label>
            </form>
            <button onClick={handleSubmit}>
                Create Task
            </button>
        </div>
    );
}
export default CreateTaskDropdown;