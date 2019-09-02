import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import { FiHome, FiPaperclip } from "react-icons/fi";

import { Sidenav, SidenavLink } from './components/Sidenav'
import { Hello } from "./components/Hello";
import theme from "./theme";
import { rem } from "./theme/utils";

const mainCSS:React.CSSProperties = {
  padding: `${rem(theme.DEFAULT_VERTICAL_PADDING)} ${rem(theme.DEFAULT_HORIZONTAL_PADDING)}`,
  paddingLeft: `${rem(theme.SIDENAV_CLOSE_WIDTH + theme.DEFAULT_HORIZONTAL_PADDING)}`
}

const routes = {
  '/': () => <Hello />,
  '/teste': () => <Hello />
} 

const App = ():React.ReactElement => (
  <div id="main">
    
    <Sidenav>
      <SidenavLink icon={FiHome} to="/">Home</SidenavLink>
      <SidenavLink icon={FiPaperclip} to="/teste">Teste</SidenavLink>
    </Sidenav>

    <div style={mainCSS}>
      {useRoutes(routes)}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));