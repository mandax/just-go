import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import { FiHome, FiPaperclip, FiBookOpen } from "react-icons/fi";
import { Sidenav, SidenavLink } from '@justgo/ui/Components/Sidenav'
import { vh, rem } from "@justgo/ui/Theme/units";

import Theme from "@justgo/ui/Theme";

import { Hello } from "./components/Hello";
import { HouseMenu } from "./components/HouseMenu";

const mainCSS:React.CSSProperties = {
  minHeight: vh(100),
  paddingLeft: `${rem(Theme.SIDENAV_CLOSE_WIDTH)}`,
  background: Theme.COLOR_BASE_2
}

const routes = {
  '/': () => <HouseMenu />,
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