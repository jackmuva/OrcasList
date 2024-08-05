import Task from "../../../model/Task";
import {useState} from "react";
import TaskOptionDropdown from "./TaskOptionDropdown/TaskOptionDropdown";

function TaskCard( input: Task ) {
    const [openTaskOptions, setOpenTaskOptions] = useState(false);

    const toggleOpen = () => {
        setOpenTaskOptions(!openTaskOptions)
    }

    function prettyDate(dateString: string){
        const date = new Date(dateString);
        return (1 + date.getUTCMonth()) + "/" + date.getUTCDay() + "/" + date.getUTCFullYear();
    }
    return(
        <div className= "flex-col bg-yellow-50 px-2">
            <div className = "flex">
                <button className="p-2 flex-1 bg-inherit border-0 font-mono text-base font-bold text-blue-800
                                    hover:text-blue-500" onClick = {toggleOpen}>
                    { input.task }
                </button>
                <div className = "p-2 flex-1 font-mono text-base font-bold text-blue-800">
                    Cadence: every { input.howOften } {input.unitOfTime}
                </div>
            </div>
            <div className="flex">
                <div>
                    {prettyDate(input.lastCompletedDate)}==============
                </div>
                <div>
                    {prettyDate(input.nextDate)}
                </div>
            </div>
            {openTaskOptions &&
                <TaskOptionDropdown id={input.id ?? ""}
                                    task={input.task}
                                    lastCompletedDate={input.lastCompletedDate ?? ""}
                                    nextDate={input.nextDate ?? ""}
                                    howOften={input.howOften}
                                    unitOfTime={input.unitOfTime ?? ""}/>}

        </div>
    );
}
export default TaskCard;