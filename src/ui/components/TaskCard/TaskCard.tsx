import Task from "../../../model/Task";
import {useState} from "react";
import TaskOptionDropdown from "./TaskOptionDropdown/TaskOptionDropdown";

function TaskCard( input: Task ) {
    const [openTaskOptions, setOpenTaskOptions] = useState(false);

    const toggleOpen = () => {
        setOpenTaskOptions(!openTaskOptions)
    }

    function prettyDate(dateString: string) {
        const date = new Date(dateString);
        return (1 + date.getUTCMonth()) + "/" + (date.getUTCDate()) + "/" + date.getUTCFullYear();
    }

    function calculateDayDiff(firstDate: Date, secondDate: Date) {
        const timeDifference = secondDate.getTime() - firstDate.getTime();
        const dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));
        return dayDifference;
    }

    function calculateProgress(lastDateString: string, nextDateString: string) {
        const lastDate = new Date(lastDateString);
        const nextDate = new Date(nextDateString);
        const curDate = new Date();

        const totalDays = calculateDayDiff(lastDate, nextDate);
        const daysLeft = calculateDayDiff(lastDate, curDate);

        return daysLeft / totalDays;
    }

    return (
        <div className="flex-col bg-yellow-50 px-2 border-2 border-blue-800 rounded-lg">
            <div className="flex items-center">
                <button className="p-2 flex-1 bg-inherit border-0 font-mono text-2xl font-bold underline text-blue-800
                                    hover:text-blue-500 focus:outline-none" onClick={toggleOpen}>
                    <div className="flex items-center">
                        <div>
                            {input.task}
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-4 ml-1">
                                <path fill-rule="evenodd"
                                      d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                                      clip-rule="evenodd"/>
                                <path fill-rule="evenodd"
                                      d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                </button>
                <div className="p-2 flex-1 font-mono text-base font-bold text-blue-800">
                    Cadence: every {input.howOften} {input.unitOfTime}
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
                    <progress value={calculateProgress(input.lastCompletedDate, input.nextDate)}/>
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