import * as React from "react";
import { Hello } from "./components/Hello";
import { Menu, MenuProps } from "./components/Menu";

export default {
  '/': () => <Menu />,
  '/:id': ({ id }: MenuProps) => <Menu id={id} />,
  '/menu': () => <Menu />,
  '/menu/:id': ({ id }: MenuProps) => <Menu id={id} />,
  '/test': () => <Hello />
};