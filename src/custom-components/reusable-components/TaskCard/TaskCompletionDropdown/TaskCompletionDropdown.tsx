import Task from "../../../../model/Task";
import TaskLogsCreateForm from "../../../../../ui-components/TaskLogsCreateForm";


function TaskCompletionDropdown( input: Task){
    return(
        <div>
            <TaskLogsCreateForm
                overrides={{
                    taskId: {
                        hidden: true,
                        labelHidden: true
                    },
                }}
                onSubmit={(fields) => {
                    return {
                        ...fields,
                        taskId: input?.id
                    }
                }}></TaskLogsCreateForm>
        </div>
    );
}
export default TaskCompletionDropdown;