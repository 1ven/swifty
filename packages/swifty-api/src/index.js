export { default as createApi } from "./createApi";

export const selectors = {
  data: state => state.data,
  isFetching: state => state.isFetching,
  lastUpdated: state => state.lastUpdated,
  error: state => state.error
};
