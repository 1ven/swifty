import createActions from "./createActions";
import createStore from "./createStore";
import fetchApi from "./fetchApi";

export default (fn, config) => {
  const actions = createActions();
  const store$ = createStore(actions);

  actions.request.stream$.subscribe((payload = {}) => {
    const api = fn(payload);

    fetchApi(
      api,
      config,
      (body, meta) => {
        actions.success.dispatch({
          request: payload,
          body,
          meta
        });
      },
      (message, body, meta) => {
        actions.failure.dispatch({
          request: payload,
          message,
          body,
          meta
        });
      }
    );
  });

  return {
    ...actions,
    store$
  };
};
