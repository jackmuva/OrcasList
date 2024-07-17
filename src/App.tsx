import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import HomePage from "./custom-components/Pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskDetailPage from "./custom-components/Pages/TaskDetailPage/TaskDetailPage";
import Header from "./custom-components/reusable-components/Header/Header";
import AboutPage from "./custom-components/Pages/AboutPage/AboutPage";

function App() {
  return (
      <div className="w-screen flex justify-center">
        <Header></Header>
          <div className="w-11/12 md:w-[40rem]">
              <BrowserRouter>
                  <Routes>
                      <Route path = "/tasks"
                             element = {
                                <Authenticator>
                                  {({ signOut, user }) => (
                                    <main>
                                        <HomePage username={user?.signInDetails?.loginId ?? ""} />
                                      <button className="bg-red-50 border-2 text-indigo-900 border-indigo-900
                                                            hover:border-white hover:bg-white"
                                          onClick={signOut}>Sign out</button>
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