import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { appRoutes } from "./routes";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
