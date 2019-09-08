import * as React from "react";
import { containerTransparent } from "@justgo/ui/Theme/container";
import { px } from "@justgo/ui/Theme/units";
import { titleSpacing } from "@justgo/ui/Theme/font";

export const Hello = () =>
  <div style={contentCSS()}>

    <h1 style={titleSpacing(2, 2)}>Wellcome to the Just Go!</h1>

    <p>
      This is a simple project based on an old idea of creating an App to manage restaurants. 
      I'll keep updating it until all the necessary functionalities are done.
      <br /><br />
      At this moment you can access the menu and put some dishes on it.
    </p>

  </div>;

const contentCSS = ():React.CSSProperties => ({
  ...containerTransparent(),
  fontSize: px(20),
  maxWidth: px(700)
})