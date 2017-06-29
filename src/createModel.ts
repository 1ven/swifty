import { Stream } from "most";
import { Mapper, Reducer } from "./types";

export default <S>(reducer$: Reducer) =>
  reducer$
    .scan((acc: S | void, fn: Mapper<S>) => fn(acc), void 0)
    .skip(1)
    .debounce(0);
