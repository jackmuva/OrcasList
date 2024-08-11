import {Schema} from "../../../../../amplify/data/resource";
import TaskCard from "../../TaskCard/TaskCard";
import {useEffect, useState} from "react";
import {generateClient} from "aws-amplify/api";
import Category from "../../../../model/Category";

const client = generateClient<Schema>();

interface CategoryCardProps{
    category: Category,
    rerenderBoolean: boolean
}

function CategoryCardDropdown(props: CategoryCardProps){
    const [tasks, setTasks] = useState<Array<Schema["Tasks"]["type"]>>([])

    useEffect(() => {
        client.models.Tasks.observeQuery({
            filter:{
                categoryId: {
                    eq: props.category.id,
                }
            }
        }).subscribe({
            next: (data) => {
                setTasks([...data.items]);
            }
        });
    }, [props.rerenderBoolean]);

    return(
        <div>
            {tasks.map((elem) => (
                <TaskCard categoryId={props.category.id}
                    id = {elem.id ?? ""}
                    task = {elem.task}
                    lastCompletedDate = {elem.lastCompletedDate ?? ""}
                    howOften = {elem.howOften}
                    unitOfTime = {elem.unitOfTime ?? ""}
                    key={elem.id}
                    nextDate={elem.nextDate ?? ""}/>
            ))}
        </div>
    );
}
export default CategoryCardDropdown;