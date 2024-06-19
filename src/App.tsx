import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [tasks, setTasks] = useState<Array<Schema["Tasks"]["type"]>>([]);

  useEffect(() => {
    client.models.Tasks.observeQuery().subscribe({
      next: (data) => setTasks([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Tasks.create({ task: window.prompt("Todo content") });
  }

    // function deleteTodo(id : string) {
    //     client.models.Tasks.delete({id})
    // }

  return (
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>{user?.signInDetails?.loginId}'s todos</h1>
              <button onClick={createTodo}>+ new</button>
              <ul>
                {tasks.map((task) => (
                  <li key={task.taskId}>{task.task}</li>
                ))}
              </ul>
              <div>
                🥳 App successfully hosted. Try creating a new todo.
                <br />
                <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
                  Review next step of this tutorial.
                </a>
              </div>
              <button onClick={signOut}>Sign out</button>
            </main>)}
        </Authenticator>
    )
}

export default App;
