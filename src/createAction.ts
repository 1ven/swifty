import { async, Subject } from "most-subject";

export default <T>(): Subject<T> => async<T>();
