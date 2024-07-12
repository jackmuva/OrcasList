import {generateClient} from "aws-amplify/api";
import {getAllTasks} from "../graphql/tasks/queries";


const client = generateClient();

class TaskService {
    static getAll = async() => {
        const response = client.graphql({
            query: getAllTasks
        });
        return response;
    }
}
export default TaskService;