import { Stream } from "most";

/**
 * Creates a new state
 *
 * @param prevState Previous state.
 * @return Returns new state.
 */
export type Mapper<S> = (prevState: S | void) => S;

/**
 * Reducer is a Stream, emitting mapper function.
 */
export type Reducer<S> = Stream<Mapper<S>>;
