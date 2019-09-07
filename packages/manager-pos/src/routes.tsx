import { FiHome, FiPaperclip, FiBookOpen } from "react-icons/fi";

import { Hello } from "./components/Hello";
import { Menu } from "./components/Menu";

export default [
  {
    path: '/',
    name: 'Home',
    icon: FiHome,
    Component: Menu
  },
  {
    path: '/menu',
    name: 'Menu',
    icon: FiBookOpen,
    Component: Menu
  },
  {
    path: '/test',
    name: 'Test',
    icon: FiPaperclip,
    Component: Hello
  }
];