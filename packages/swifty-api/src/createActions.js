import { Subject } from "rxjs";

export default () => ({
  request$: new Subject(),
  success$: new Subject(),
  failure$: new Subject()
});
