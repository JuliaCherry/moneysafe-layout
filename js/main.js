import { datalistControl } from "./dataListControl.js";
import { financeConrtol } from "./financeControl.js";
import { reportControl } from "./reportControl.js";

const init = () => {
  financeConrtol();
  reportControl();
  datalistControl();
};

init();
