import {Schema} from "../../../../../amplify/data/resource";
import TaskCard from "../../TaskCard/TaskCard";
import {useEffect, useState} from "react";
import {generateClient} from "aws-amplify/api";
import Category from "../../../../model/Category";
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';

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
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((elem) => (
                    <TaskCard
                        categoryId={input.id}
                        id = {elem.id ?? ""}
                        task = {elem.task}
                        lastCompletedDate = {elem.lastCompletedDate ?? ""}
                        howOften = {elem.howOften}
                        unitOfTime = {elem.unitOfTime ?? ""}
                        key={elem.id}
                        nextDate={elem.nextDate ?? ""}/>
                ))}
            </SortableContext>
        </div>
    );
}
export default CategoryCardDropdown;