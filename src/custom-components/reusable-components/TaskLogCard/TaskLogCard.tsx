import TaskLog from "../../../model/TaskLog";
import {useState} from "react";
import AttachmentDropdown from "../AttachmentDropdown/AttachmentDropdown";


function TaskLogCard(taskLog: TaskLog){
    const [openAttachmentPanel, setOpenAttachmentPanel] = useState(false);

    const toggleOpen = () => {
        setOpenAttachmentPanel(!openAttachmentPanel);
    }

    return(
        <div className = "bg-white w-full border-black rounded-md border-1">
            <button onClick = {toggleOpen}
                    className = "flex flex-row px-2 bg-white text-black">
                <div className = "flex m-2">
                    {taskLog.completionDate}
                </div>
                <div className = "flex text-balance m-2">
                    {taskLog.notes}
                </div>
            </button>
            {openAttachmentPanel && <AttachmentDropdown taskId={taskLog.taskId}
                                                        notes = {taskLog.notes ?? ""}
                                                        completionDate={taskLog.completionDate}
                                                        attachmentPath={taskLog.attachmentPath ?? ""}/>}
        </div>
    );
}
export default TaskLogCard;