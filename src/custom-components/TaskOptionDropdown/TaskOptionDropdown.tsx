import Task from "../../model/Task";
import {useState} from "react";
import TaskCompletionDropdown from "../TaskCompletionDropdown/TaskCompletionDropdown";


function TaskOptionDropdown( input: Task ){
    console.log(input.task);
    const [completionDropdown, setCompletionDropdown] = useState(false);

    const toggleOpen = () => {
        setCompletionDropdown(!completionDropdown);
    }
    return (
        <div className = "flex flex-col">
            <div className = "flex flex-row">
                <div className = "flex-auto">
                    <button className = "" onClick = {toggleOpen}>
                        Log Completion
                    </button>
                </div>
                <div className= "flex-auto">
                    <button className = "">
                        Detailed Task View
                    </button>
                </div>
            </div>
            { completionDropdown && <TaskCompletionDropdown taskId={input.taskId ?? ""}
                                                        task={input.task}
                                                        lastCompletedDate={input.lastCompletedDate ?? ""}
                                                        howOften={input.howOften}
                                                        unitOfTime={input.unitOfTime ?? ""} />}
        </div>
    );
}
export default TaskOptionDropdown;