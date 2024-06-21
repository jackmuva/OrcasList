import Task from "../../model/Task";


function TaskCard( input: Task ) {
    return(
        <div className= "flex bg-white px-2">
            <div className = "flex-auto bg-white">
                { input.task }
            </div>
            <div className = "flex-auto bg-white">
                Every { input.howOften } {input.unitOfTime}
            </div>
        </div>
    );
}
export default TaskCard;