import { Observable } from "rxjs";

export const createStore = (reducer$, initialState) =>
  reducer$.scan((acc, fn) => fn(acc), initialState);

export const createAction = () => {
  let obs;

  const stream$ = Observable.create(observer => {
    obs = observer;
  });

  return {
    stream$,
    dispatch(payload) {
      obs.next(payload);
    }
  };
};
