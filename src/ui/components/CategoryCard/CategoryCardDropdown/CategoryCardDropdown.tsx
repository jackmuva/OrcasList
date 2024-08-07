import {Schema} from "../../../../../amplify/data/resource";
import TaskCard from "../../TaskCard/TaskCard";
import {useEffect, useState} from "react";
import {generateClient} from "aws-amplify/api";
import Category from "../../../../model/Category";

const client = generateClient<Schema>();

function CategoryCardDropdown(input: Category){
    const [tasks, setTasks] = useState<Array<Schema["Tasks"]["type"]>>([])

    useEffect(() => {
        client.models.Tasks.observeQuery({
            filter:{
                categoryId: {
                    eq: input.id,
                }
            }
        }).subscribe({
            next: (data) => {
                setTasks([...data.items]);
            }
        });
    }, []);

    return(
        <div>
            {tasks.map((elem) => (
                <TaskCard
                    id = {elem.id ?? ""}
                    task = {elem.task}
                    lastCompletedDate = {elem.lastCompletedDate ?? ""}
                    howOften = {elem.howOften}
                    unitOfTime = {elem.unitOfTime ?? ""}
                    key={elem.id} />
            ))}
        </div>
    );
}
export default CategoryCardDropdown;