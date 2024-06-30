import {useParams} from "react-router-dom";


function TaskDetailPage(){
    const { taskId } = useParams();
    return(
        <div>
            {taskId}
        </div>
    );
}
export default TaskDetailPage;