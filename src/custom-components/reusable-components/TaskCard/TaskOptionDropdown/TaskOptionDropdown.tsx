import Task from "../../../../model/Task";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../../amplify/data/resource";
import {useAppDispatch, useAppSelector} from "../../../../redux/hook";
import {selectTaskLog, setTaskLogs} from "../../../../redux/features/taskLogSlice";
import {useEffect, useState} from "react";
import TaskLogCard from "../../TaskLogCard/TaskLogCard";
import TaskCompletionDropdown from "../TaskCompletionDropdown/TaskCompletionDropdown";

const client = generateClient<Schema>();
function TaskOptionDropdown( input: Task ){
    const [openCreate, setOpenCreate] = useState(false);
    const [newTaskLog, setNewTaskLog] = useState(false);
    const taskLogState = useAppSelector(selectTaskLog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        client.models.TaskLogs.observeQuery(
            {
                filter: {
                    taskId: {
                        eq: input.id
                    }
                }
            }
        ).subscribe({
            next: (data) => {
                dispatch(setTaskLogs(data.items));
            }
        });
    }, [newTaskLog]);

    function toggleTaskCompletion() {
        setOpenCreate(!openCreate);
    }

    function toggleNewTaskLog(){
        setNewTaskLog(true);
    }

    return (
        <div className = "flex flex-col items-center">
            {[...taskLogState.taskLogs].sort((a, b) => {
                if (a.completionDate > b.completionDate) {
                    return -1;
                }
                if (b.completionDate > a.completionDate) {
                    return 1;
                }
                return 0;}
            ).map((taskLog) => (
                <div>
                    <TaskLogCard taskId={taskLog.id}
                                 notes = {taskLog.notes ?? ""}
                                 completionDate={taskLog.completionDate}
                                 attachmentPath={taskLog.attachmentPath ?? ""}
                    ></TaskLogCard>
                </div>
            ))}
            <button className="m-2 w-fit py-1 text-blue-800 bg-green-100 font-bold border-2 border-blue-800
                                hover:border-white" onClick={toggleTaskCompletion}>
                + Log Task Completion
            </button>
            {openCreate && <TaskCompletionDropdown input={input} toggle={toggleNewTaskLog} />}
        </div>
    );
}
export default TaskOptionDropdown;