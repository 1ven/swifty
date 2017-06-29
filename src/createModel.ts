import { Stream } from "most";
import { Mapper, Reducer } from "./types";

/**
 * Creates a state stream, which emits state data on every update.
 *
 * @param reducer$ Reducer stream.
 * @return Returns state stream.
 */
export default <S>(reducer$: Reducer<S>) =>
  reducer$
    .scan((acc: S | void, fn: Mapper<S>) => fn(acc), void 0)
    .skip(1)
    .debounce(0) as Stream<S>;
