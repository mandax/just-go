import * as Card from './Components/Card';
import * as Grid from './Components/Grid';
import * as SideContent from './Components/SideContent';
import * as Sidenav from './Components/Sidenav';
import * as Select from './Components/Select';
import * as Input from './Components/Input';
import * as Label from './Components/Label';
import * as TextArea from './Components/TextArea';
import * as Button from './Components/Button';

import Theme from './Theme';

const Ui = {
  Theme,

  ...Card,
  ...Grid,
  ...SideContent,
  ...Sidenav,
  ...Select,
  ...Input,
  ...Label,
  ...TextArea,
  ...Button
};

export default Ui;