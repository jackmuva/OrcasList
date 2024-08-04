import Task from "../../../model/Task";
import {useState} from "react";
import TaskOptionDropdown from "./TaskOptionDropdown/TaskOptionDropdown";

function TaskCard( input: Task ) {
    const [openTaskOptions, setOpenTaskOptions] = useState(false);

    const toggleOpen = () => {
        setOpenTaskOptions(!openTaskOptions)
    }

    return(
        <div className= "flex-col bg-white px-2">
            <div className = "flex">
                <button className = "flex-auto bg-inherit border-0 text-black" onClick = {toggleOpen}>
                    { input.task }
                </button>
                <div className = "flex-auto">
                    Every { input.howOften } {input.unitOfTime}
                </div>
            </div>
            {openTaskOptions &&
                <TaskOptionDropdown id={input.id ?? ""}
                                    task={input.task}
                                    lastCompletedDate={input.lastCompletedDate ?? ""}
                                    howOften={input.howOften}
                                    unitOfTime={input.unitOfTime ?? ""} />}

        </div>
    );
}
export default TaskCard;