import createActions from "./createActions";
import fetchApi from "./fetchApi";
import replaceParams from "./replaceParams";

export default spec => {
  const actions = createActions();

  actions.request$.subscribe(async request => {
    fetchApi(
      {
        url: replaceParams(spec.url, request.params),
        method: spec.method,
        headers: spec.headers,
        body: request.body
      },
      spec.map,
      (body, meta) => {
        actions.success$.next({
          request,
          body,
          meta
        });
      },
      (message, body, meta) => {
        actions.failure$.next({
          message,
          request,
          body,
          meta
        });
      }
    );
  });
};
