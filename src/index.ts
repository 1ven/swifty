import { Stream } from "most";
import { Mapper } from "./types";

export const createModel = <S>(reducer$: Stream<Mapper<S>>) =>
  reducer$
    .scan((acc: S | void, fn: Mapper<S>) => fn(acc), void 0)
    .skip(1)
    .debounce(0);
