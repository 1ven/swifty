import { async, Subject } from "most-subject";
import { Action } from "./types";

/**
 * Creates an action.
 *
 * @return Returns new action.
 */
export default <T>(): Action<T> => {
  const subject$ = async<T>();

  return (payload: T) => subject$.next(payload);
};
