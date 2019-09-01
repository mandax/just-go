import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import { Sidenav, SidenavLink } from './components/Sidenav'
import { Hello } from "./components/Hello";

const App:React.ReactElement = (
  <Router>
    
    <Sidenav>

      <SidenavLink icon={FiHome} to="/">Home</SidenavLink>
        
    </Sidenav>

    <Route path="/" component={Hello} />
  </Router>
);

ReactDOM.render(App, document.getElementById("app"));