import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import TasksCreateForm from '../ui-components/TasksCreateForm';

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
              <button onClick={toggleForm}>+ new</button>
              {openTaskForm && <TasksCreateForm></TasksCreateForm>}
              <ul>
                {tasks.map((task) => (
                  <li key={task.taskId}>{task.task}</li>
                ))}
              </ul>
              <button onClick={signOut}>Sign out</button>
            </main>)}
        </Authenticator>
    )
}

export default App;
