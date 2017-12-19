import { Observable } from "rxjs";
import { createStore } from "swifty-core";

export default actions =>
  createStore(
    Observable.merge(
      actions.request.stream$.map(payload => state => ({
        ...state,
        isFetching: true
      })),
      actions.success.stream$.map(payload => state => ({
        ...state,
        isFetching: false,
        data: payload.body,
        error: void 0,
        lastUpdated: payload.meta.receivedAt
      })),
      actions.failure.stream$.map(payload => state => ({
        ...state,
        isFetching: false,
        error: payload.message
      }))
    ),
    {
      isFetching: false
    }
  );
