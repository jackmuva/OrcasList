import Task from "../../../model/Task";
import TaskLogsCreateForm from "../../../../ui-components/TaskLogsCreateForm";


function TaskCompletionDropdown( input: Task){
    console.log(input);
    return(
        <div>
            <TaskLogsCreateForm></TaskLogsCreateForm>
        </div>
    );
}
export default TaskCompletionDropdown;