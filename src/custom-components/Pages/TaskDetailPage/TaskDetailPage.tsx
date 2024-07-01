import {useParams} from "react-router-dom";
import {generateClient} from "aws-amplify/api";
import {Schema} from "../../../../amplify/data/resource";
import {useEffect, useState} from "react";

const client = generateClient<Schema>();
function TaskDetailPage(){
    const [taskLogs, setTaskLogs] = useState<Array<Schema["TaskLogs"]["type"]>>([]);
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
                setTaskLogs([...data.items])},
        });
    }, []);
    // console.log(taskLogs);
    return(
        <div>
            {taskLogs.map((taskLog) => (
                <div>
                    {taskLog.notes}
                </div>
            ))}
        </div>
    );
}
export default TaskDetailPage;