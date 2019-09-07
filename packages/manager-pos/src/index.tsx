import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRoutes, HookRouter } from "hookrouter";
import { Sidenav, SidenavLink } from '@justgo/ui/Components/Sidenav'
import { vh, rem } from "@justgo/ui/Theme/units";
import Routes from "./routes";

import Theme from "@justgo/ui/Theme";

const mainCSS:React.CSSProperties = {
  minHeight: vh(100),
  paddingLeft: `${rem(Theme.SIDENAV_CLOSE_WIDTH)}`,
  background: Theme.COLOR_BASE_2
}

const routesToHook = Routes.reduce((acc: HookRouter.RouteObject, route) => {
  acc[route.path] = () => <route.Component />
  return acc;
}, {})

const App = ():React.ReactElement => (
  <div id="main">
    
    <Sidenav fixed={true}>
      {Routes.map((route, i) => 
        <SidenavLink key={i} idx={i} icon={route.icon} to={route.path}>{route.name}</SidenavLink>
      )}
    </Sidenav>

    <div style={mainCSS}>
      {useRoutes(routesToHook)}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));