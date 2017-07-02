import { async, Subject } from "most-subject";
import { Action } from "./types";

/**
 * Creates an action.
 *
 * @return Returns new action.
 */
export default <T>(): Action<T> => async<T>();
