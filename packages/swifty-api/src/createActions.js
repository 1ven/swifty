import { createAction } from "swifty-core";

export default () => ({
  request$: createAction(),
  success$: createAction(),
  failure$: createAction()
});
