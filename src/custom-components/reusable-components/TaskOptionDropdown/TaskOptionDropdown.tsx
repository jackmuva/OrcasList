import Task from "../../../model/Task";
import {useState} from "react";
import TaskCompletionDropdown from "../TaskCompletionDropdown/TaskCompletionDropdown";
import {useNavigate} from "react-router-dom";


function TaskOptionDropdown( input: Task ){
    const [completionDropdown, setCompletionDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleOpen = () => {
        setCompletionDropdown(!completionDropdown);
    }
    const redirectToTaskDetails = () => {
        const url = "/task/" + input.id;
        navigate(url);
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
                    <button className = "" onClick = {redirectToTaskDetails}>
                        Detailed Task View
                    </button>
                </div>
            </div>
            { completionDropdown && <TaskCompletionDropdown id={input.id ?? ""}
                                                        task={input.task}
                                                        lastCompletedDate={input.lastCompletedDate ?? ""}
                                                        howOften={input.howOften}
                                                        unitOfTime={input.unitOfTime ?? ""} />}
        </div>
    );
}
export default TaskOptionDropdown;