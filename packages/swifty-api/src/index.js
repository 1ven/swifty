export { default as createApi } from "./createApi";

export const selectors = {
  data: state => state.data,
  isFetching: state => state.isFetching,
  error: state => state.error,
  lastUpdated: state => state.lastUpdated
};
