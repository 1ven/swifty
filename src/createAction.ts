import { async, Subject } from "most-subject";

/**
 * Creates an action.
 *
 * @return Returns new action.
 */
export default <T>(): Subject<T> => async<T>();
