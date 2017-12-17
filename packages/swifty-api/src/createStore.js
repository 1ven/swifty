import { Observable } from "rxjs";
import { createStore } from "swifty-core";

export default actions =>
  createStore(
    Observable.merge(
      actions.request$.map(payload => state => ({
        ...state,
        isFetching: true
      })),
      actions.success$.map(payload => state => ({
        ...state,
        isFetching: false,
        error: undefined,
        data: payload.data
      })),
      actions.failure$.map(payload => state => ({
        ...state,
        isFetching: true
      }))
    ),
    {
      isFetching: false
    }
  );
