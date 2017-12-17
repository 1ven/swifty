export const createStore = (reducer$, initialState) =>
  reducer$.scan((acc, fn) => fn(acc), initialState).debounceTime(0);
