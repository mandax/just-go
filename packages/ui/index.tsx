import * as Card from './Components/Card';
import * as Grid from './Components/Grid';
import * as SideContent from './Components/SideContent';
import * as Sidenav from './Components/Sidenav';

import Theme from './Theme';

const Ui = {
  Theme,

  ...Card,
  ...Grid,
  ...SideContent,
  ...Sidenav,
};

export default Ui;