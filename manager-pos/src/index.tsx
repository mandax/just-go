import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import { Sidenav, SidenavLink } from './components/Sidenav'
import { Hello } from "./components/Hello";
import theme from "./theme";
import { rem } from "./theme/utils";

const mainCSS:React.CSSProperties = {
  padding: `${rem(theme.DEFAULT_VERTICAL_PADDING)} ${rem(theme.DEFAULT_HORIZONTAL_PADDING)}`,
  paddingLeft: `${rem(theme.SIDENAV_CLOSE_WIDTH + theme.DEFAULT_HORIZONTAL_PADDING)}`
}

const App:React.ReactElement = (
  <Router>
    
    <Sidenav>
      <SidenavLink icon={FiHome} to="/">Home</SidenavLink>
    </Sidenav>

    <div style={mainCSS}>
      <Route path="/" component={Hello} />
    </div>
  </Router>
);

ReactDOM.render(App, document.getElementById("app"));