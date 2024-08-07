import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import HomePage from "./ui/pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskDetailPage from "./ui/pages/TaskDetailPage/TaskDetailPage";
import Header from "./ui/components/Header/Header";
import AboutPage from "./ui/pages/AboutPage/AboutPage";

function App() {
  return (
      <BrowserRouter>
          <div className="max-w-full h-screen overflow-x-hidden flex flex-col">
          <Header></Header>
          <Routes>
              <Route path = "/tasks"
                     element = {
                        <Authenticator>
                          {({ signOut, user }) => (
                            <main>
                                <HomePage username={user?.signInDetails?.loginId ?? ""} />
                              <button className="bg-red-50 border-2 text-indigo-900 border-indigo-900 place-self-center
                                                    hover:border-white hover:bg-white w-11/12 md:w-[40rem]"
                                  onClick={signOut}>Sign out</button>
                            </main>)}
                        </Authenticator>
                     }
              ></Route>
              <Route path = "/task/:taskId"
                     element = {<TaskDetailPage />} />
              <Route path = "/" element = {<AboutPage />}/>
          </Routes>
          </div>
      </BrowserRouter>
    );
}
export default App;