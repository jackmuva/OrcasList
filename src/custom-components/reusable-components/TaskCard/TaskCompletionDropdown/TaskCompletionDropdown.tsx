import Task from "../../../../model/Task";
import React, {useState} from "react";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../../amplify/data/resource";

interface FuncProps{
    input: Task,
    toggle: () => void;
}

const client = generateClient<Schema>();

const TaskCompletionDropdown: React.FC<FuncProps> = (props:FuncProps) => {
    const [notes, setNotes] = useState("");
    const [completionDate, setCompletionDate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async() => {
        if(completionDate === ""){
            setErrorMessage("Completion date cannot be blank");
        } else {
            await client.models.TaskLogs.create({
                taskId: props.input?.id,
                notes: notes,
                completionDate: completionDate
            }).then(() => {
                props.toggle();
            })
        }
    }

    return(
        <div className="mt-4 flex flex-col overflow-x-hidden overflow-y-hidden place-items-center">
            <form className="flex flex-col space-y-2">
                <label className="font-mono font-bold text-blue-800">
                    <div>Notes:</div>
                    <textarea className="mx-2 rounded-md border-2 border-indigo-800 px-2"
                           rows={3} cols={40} value = {notes}
                           onChange={(e) => {setNotes(e.target.value)}} />
                </label>
                <label className="font-mono font-bold text-blue-800">
                    Date Completed:
                    <input className="mx-2 rounded-md border-2 border-indigo-800 px-2"
                           type = "date" value = {completionDate}
                           onChange={(e) => {setCompletionDate(e.target.value)}} />
                </label>
            </form>
            <div className="font-bold text-red-800 text-lg">
                {errorMessage}
            </div>
            <button className="m-2 w-fit py-1 text-blue-800 bg-blue-100 font-bold border-2 border-blue-800
                                hover:border-white" onClick={() => handleSubmit()}>
                Log Task Completion
            </button>
        </div>
    );
}
export default TaskCompletionDropdown;