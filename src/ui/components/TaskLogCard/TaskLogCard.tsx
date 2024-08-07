import TaskLog from "../../../model/TaskLog";
import {useState} from "react";
import AttachmentDropdown from "./AttachmentDropdown/AttachmentDropdown";


function TaskLogCard(taskLog: TaskLog){
    const [openAttachmentPanel, setOpenAttachmentPanel] = useState(false);

    const toggleOpen = () => {
        setOpenAttachmentPanel(!openAttachmentPanel);
    }

    return(
        <div className = "bg-yellow-100 min-w-full border-blue-800 rounded-sm border-t-2">
            <button onClick = {toggleOpen}
                    className="w-max flex bg-yellow-100 flex-row px-2 text-blue-800
                                hover:border-yellow-100 focus:outline-none">
                <div className = "flex py-2 px-4 flex-1 border-r-2 border-blue-100">
                    {taskLog.completionDate}
                </div>
                <div className = "flex py-2 px-4 flex-2">
                    {taskLog.notes ? taskLog.notes : <div className="text-red-900">-------------</div>}
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