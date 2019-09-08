import * as React from "react";
import * as ReactDOM from "react-dom";

import { useRoutes, usePath, navigate } from "hookrouter";
import { Sidenav, SidenavLink } from '@justgo/ui/Components/Sidenav'
import { vh, rem } from "@justgo/ui/Theme/units";
import { FiHome, FiPaperclip, FiBookOpen } from "react-icons/fi";

import Theme from "@justgo/ui/Theme";

import { Hello } from "./components/Hello";
import { Menu, MenuProps } from "./components/Menu";
import { IconType } from "react-icons/lib/cjs";

interface SidenavLinks {
  name: string
  path: string
  icon: IconType
}

const routes = {
  '/': () => <Hello />,
  '/menu': () => <Menu />,
  '/menu/:id': ({ id }: MenuProps) => <Menu id={id} />
};

const sidenavLinks: SidenavLinks[] = [
  { name: 'Home', path: '/', icon: FiHome },
  { name: 'Menu', path: '/menu', icon: FiBookOpen }
]

const notFound = () => <div>Ops.</div>;

const App = (): React.ReactElement => {
  const routeResult = useRoutes(routes);
  const path = usePath();

  const isActive = (matchPath: string) => path === matchPath;
  const navigateTo = (path: string) => () => navigate(path);

  return (
    <div id="main" style={mainCSS}>

      <Sidenav fixed={true}>
        {sidenavLinks.map((link, i) => 
        <SidenavLink
          idx={i}
          icon={link.icon}
          isActive={isActive(link.path)}
          onClick={navigateTo(link.path)}>
          {link.name}
        </SidenavLink>
      )}
      </Sidenav>

      <div style={mainContentCSS}>
        {routeResult || notFound()}
      </div>
    </div>
  )
};

const mainCSS: React.CSSProperties = {
  fontSize: Theme.DEFAULT_REM_SIZE
}

const mainContentCSS: React.CSSProperties = {
  minHeight: vh(100),
  paddingLeft: `${rem(Theme.SIDENAV_CLOSE_WIDTH)}`,
  background: Theme.COLOR_BASE_2
}

ReactDOM.render(<App />, document.getElementById("app"));