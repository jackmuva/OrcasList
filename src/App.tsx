import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import HomePage from "./custom-components/Pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskDetailPage from "./custom-components/Pages/TaskDetailPage/TaskDetailPage";

function App() {
  return (
        <Authenticator>
          {({ signOut, user }) => (
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path = "/"
                               element = {<HomePage username={user?.signInDetails?.loginId ?? ""} />}></Route>
                        <Route path = "/task/:taskId"
                               element = {<TaskDetailPage />} />
                    </Routes>
                </BrowserRouter>
              <button onClick={signOut}>Sign out</button>
            </main>)}
        </Authenticator>
    );
}
export default App;