import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import { FiHome, FiPaperclip, FiBookOpen } from "react-icons/fi";

import { Sidenav, SidenavLink } from './components/Sidenav'
import theme from "./theme";
import { Hello } from "./components/Hello";
import { HouseMenu } from "./components/HouseMenu";
import { rem } from "./theme/utils";
import { container } from "./theme/mixins";

const mainCSS:React.CSSProperties = {
  ...container(),
  paddingLeft: `${rem(theme.SIDENAV_CLOSE_WIDTH + theme.DEFAULT_HORIZONTAL_PADDING)}`
}

const routes = {
  '/': () => <Hello />,
  '/menu': () => <HouseMenu />,
  '/teste': () => <Hello />
} 

const App = ():React.ReactElement => (
  <div id="main">
    
    <Sidenav>
      <SidenavLink icon={FiHome} to="/">Home</SidenavLink>
      <SidenavLink icon={FiBookOpen} to="/menu">Menu</SidenavLink>
      <SidenavLink icon={FiPaperclip} to="/teste">Teste</SidenavLink>
    </Sidenav>

    <div style={mainCSS}>
      {useRoutes(routes)}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));