import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import HomePage from "./custom-components/Pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskDetailPage from "./custom-components/Pages/TaskDetailPage/TaskDetailPage";
import Header from "./custom-components/reusable-components/Header/Header";
import AboutPage from "./custom-components/Pages/AboutPage/AboutPage";

function App() {
  return (
      <div>
        <Header></Header>
          <div className="px-4 w-screen md:px-52">
              <BrowserRouter>
                  <Routes>
                      <Route path = "/tasks"
                             element = {
                                <Authenticator>
                                  {({ signOut, user }) => (
                                    <main>
                                        <HomePage username={user?.signInDetails?.loginId ?? ""} />
                                      <button onClick={signOut}>Sign out</button>
                                    </main>)}
                                </Authenticator>
                             }
                      ></Route>
                      <Route path = "/task/:taskId"
                             element = {<TaskDetailPage />} />
                      <Route path = "/" element = {<AboutPage />}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
    );
}
export default App;