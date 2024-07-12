import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lazyloadin from "./components/Common/Lazyloadin";
import Layout from "./layouts/LandingPageLayout/Layout";
import Dashboard from "./Pages/private/Dashboard"
import PrivateLayout from "./layouts/PrivateLayout/Layout"
import Error from "./utils/error"
import AuthPageLayout from "./layouts/AuthLayout/AuthPageLayout";
import Projects from "./Pages/private/AllProjects/projects"
import Tasks from './Pages/private/AllTasks/Tasks'
import Buges from './Pages/private/AllBugs/buges'
import Wikies from './Pages/private/Wikies'
import ProjectLayout from "./layouts/ProjectLayout/Layout.js"
import Protect from "./utils/protect"
import Overview from "./Pages/private/AllProjects/Overview";
import Backlog from "./Pages/private/AllProjects/Backlog";
import AllSprints from "./Pages/private/AllProjects/Sprints";
import ProjectTasks from "./Pages/private/AllProjects/Tasks";
import ProjectBug from "./Pages/private/AllProjects/Bugs"
import Sprint from "./Pages/private/Sprints/sprints";
import SubTasks from "../src/components/Common/bugslist.js"
const SignIn = lazy(() => import("./Pages/public/SignIn"));
const Signup = lazy(() => import("./Pages/public/Signup"));
const ForgotPassword = lazy(() => import("./Pages/public/ForgotPassword"));
const NewPassword = lazy(()=>import("./Pages/public/NewPassword"));
const AboutUs =lazy(()=>import ('./Pages/public/About/about'));
const Home = lazy(()=>import("./Pages/public/Home/home"));
const Features = lazy(()=>import("./Pages/public/Features/features"))
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Suspense fallback={<Lazyloadin />}><Layout/></Suspense>}>
          <Route index element={<Suspense fallback={<Lazyloadin />}> <Home/> </Suspense>}/>     
        </Route>
        
        <Route  path="/" element={<Layout/>}>
            <Route path="features" element={<Suspense fallback={<Lazyloadin />}><Features/></Suspense>}/>
            <Route path="about" element={<Suspense fallback={<Lazyloadin />}><AboutUs/></Suspense>}/>
        </Route>
        
        <Route path="/" element={<AuthPageLayout/>}>
           <Route path="signin" element={<Suspense fallback={<Lazyloadin />}><SignIn /></Suspense>}/>
            <Route path="signup" element={<Suspense fallback={<Lazyloadin />}><Signup /></Suspense>}/>
            <Route path="forgotpassword" element={<Suspense fallback={<Lazyloadin />}> <ForgotPassword /></Suspense>}/>
            <Route path="newpassword" element={<Suspense fallback={<Lazyloadin />}><NewPassword /></Suspense>}/>
        </Route>
      
         <Route path="/" element={<PrivateLayout/>}>
           <Route path="dashboard" element={<Suspense fallback={<Lazyloadin />}><Dashboard /></Suspense>}/>
           <Route path="projects" element={<Suspense fallback={<Lazyloadin />}><Projects/></Suspense>}/>
           <Route path="tasks" element={<Suspense fallback={<Lazyloadin />}><Tasks/></Suspense>}/>
           <Route path="buges" element={<Suspense fallback={<Lazyloadin />}><Buges/></Suspense>}/>
           <Route path="sprints" element={<Suspense fallback={<Lazyloadin />}><Sprint/></Suspense>}/>
           <Route path="wikies" element={<Suspense fallback={<Lazyloadin />}><Wikies/></Suspense>}/>
         </Route>
         <Route path="/" element={<ProjectLayout/>}>
             <Route path="overview" element={<Suspense fallback={<Lazyloadin />}><Overview/></Suspense>}/>
             <Route path="backlog" element={<Suspense fallback={<Lazyloadin />}><Backlog/></Suspense>}/>
             <Route path="sprint" element={<Suspense fallback={<Lazyloadin />}><AllSprints/></Suspense>}/>
             <Route path="alltasks" element={<Suspense fallback={<Lazyloadin />}><ProjectTasks/></Suspense>}/>
             <Route path="allbuges" element={<Suspense fallback={<Lazyloadin />}><ProjectBug/></Suspense>}/>
         </Route>
         <Route path="tasklist" element={<SubTasks/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
