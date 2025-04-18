import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import PortfolioFilter from "./pages/Portfolio/PortfolioFilter/PortfolioFilter";
import HomeList from "./components/Home";
import Admin from "./admin/Admin";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import { AddProject } from "./admin/pages/AddProjects/AddProject";
import NotFound from "./utlities/NotFound/NotFound";

export const appRoutes = [
    { path: "", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "resume", element: <Resume /> },
    { path: "portfolio", element: <Portfolio /> },
    { path: "project-details", element: <ProjectDetails /> },
    { path: "projects", element: <PortfolioFilter /> },
    { path: "home", element: <HomeList /> },
    { path: "admin", element: <Admin /> },
    { path: "dashboard", element: <Dashboard /> },
    { path: "addproject", element: <AddProject /> },
    { path: "*", element: <NotFound /> },
];

