import {useParams} from "react-router-dom";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../amplify/data/resource";
import TaskLogCard from "../../reusable-components/TaskLogCard/TaskLogCard";
import {useAppDispatch, useAppSelector} from "../../../redux/hook";
import {selectTaskLog, setTaskLogs} from "../../../redux/features/taskLogSlice";
import {useEffect} from "react";

const client = generateClient<Schema>();
function TaskDetailPage(){
    const taskLogState = useAppSelector(selectTaskLog);
    const dispatch = useAppDispatch();
    const { taskId } = useParams();

    useEffect(() => {
        client.models.TaskLogs.observeQuery(
            {
                filter: {
                    taskId: {
                        eq: taskId
                    }
                }
            }
        ).subscribe({
            next: (data) => {
                dispatch(setTaskLogs(data.items));
            }
        });
    }, []);


    return(
        <div>
            <button><a href = "/"> Back </a></button>
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
        </div>
    );
}
export default TaskDetailPage;