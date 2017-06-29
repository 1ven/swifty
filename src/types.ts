import { Stream } from "most";

export type Mapper<S> = (state: S | void) => S;
export type Reducer<S> = Stream<Mapper<S>>;
