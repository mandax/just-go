import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import { FiHome, FiPaperclip, FiBookOpen } from "react-icons/fi";

import { Sidenav, SidenavLink } from './components/Sidenav'
import theme from "./theme";
import { Hello } from "./components/Hello";
import { HouseMenu } from "./components/HouseMenu";
import { rem } from "./theme/utils";

const mainCSS:React.CSSProperties = {
  paddingLeft: `${rem(theme.SIDENAV_CLOSE_WIDTH)}`
}

const routes = {
  '/': () => <Hello />,
  '/menu': () => <HouseMenu />,
  '/teste': () => <Hello />
} 

const App = ():React.ReactElement => (
  <div id="main">
    
    <Sidenav fixed={true}>
      <SidenavLink idx={0} icon={FiHome} to="/">Home</SidenavLink>
      <SidenavLink idx={1} icon={FiBookOpen} to="/menu">Menu</SidenavLink>
      <SidenavLink idx={2} icon={FiPaperclip} to="/teste">Teste</SidenavLink>
    </Sidenav>

    <div style={mainCSS}>
      {useRoutes(routes)}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));