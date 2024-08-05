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
        return (1 + date.getUTCMonth()) + "/" + (date.getUTCDate()) + "/" + date.getUTCFullYear();
    }

    function calculateDayDiff(firstDate: Date, secondDate: Date){
        const timeDifference = secondDate.getTime() - firstDate.getTime();
        const dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));
        return dayDifference;
    }
    function calculateProgress(lastDateString: string, nextDateString: string){
        const lastDate = new Date(lastDateString);
        const nextDate = new Date(nextDateString);
        const curDate = new Date();

        const totalDays = calculateDayDiff(lastDate, nextDate);
        const daysLeft = calculateDayDiff(lastDate, curDate);

        return daysLeft/totalDays;
    }

    return(
        <div className= "flex-col bg-yellow-50 px-2 border-2 border-blue-800 rounded-lg">
            <div className = "flex items-center">
                <button className="p-2 flex-1 bg-inherit border-0 font-mono text-2xl font-bold underline text-blue-800
                                    hover:text-blue-500 focus:outline-none" onClick = {toggleOpen}>
                    { input.task }
                </button>
                <div className = "p-2 flex-1 font-mono text-base font-bold text-blue-800">
                    Cadence: every { input.howOften } {input.unitOfTime}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col font-mono text-blue-800 font-bold px-1">
                    <div>
                        Last Completed:
                    </div>
                    <div>
                        {prettyDate(input.lastCompletedDate)}
                    </div>
                </div>
                <div>
                    <progress value={calculateProgress(input.lastCompletedDate, input.nextDate)} />
                </div>
                <div className="flex flex-col font-mono text-blue-800 font-bold px-1">
                    <div>
                        Next Due Date:
                    </div>
                    <div>
                        {prettyDate(input.nextDate)}
                    </div>
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