import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import TasksCreateForm from '../ui-components/TasksCreateForm';
import TaskCard from "./custom-components/TaskCard/TaskCard";

const client = generateClient<Schema>();

function App() {
  const [tasks, setTasks] = useState<Array<Schema["Tasks"]["type"]>>([]);
  const [openTaskForm, setOpenTaskForm] = useState(false);

  useEffect(() => {
    client.models.Tasks.observeQuery().subscribe({
      next: (data) => {
        setTasks([...data.items])},
    });
  }, []);

  function toggleForm() {
    setOpenTaskForm(!openTaskForm);
  }

  return (
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>{user?.signInDetails?.loginId}'s todos</h1>
              <button onClick={toggleForm}>+ Add new task</button>
              {openTaskForm && <TasksCreateForm></TasksCreateForm>}
              <ul className = "w-96">
                {tasks.map((elem) => (
                  <TaskCard
                      taskId = {elem.taskId ?? ""}
                      task = {elem.task}
                      lastCompletedDate = {elem.lastCompletedDate ?? ""}
                      howOften = {elem.howOften}
                      unitOfTime = {elem.unitOfTime ?? ""}
                      key={elem.taskId} />
                ))}
              </ul>
              <button onClick={signOut}>Sign out</button>
            </main>)}
        </Authenticator>
    );
}
export default App;