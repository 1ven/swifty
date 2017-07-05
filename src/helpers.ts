import { Selector } from "./types";
import { Maybe } from "ramda-fantasy";

export const createSafeSelector = <S, P>(selector: Selector<S, P>) => (
  state: S,
  props: P
) => {
  const result = selector(state, props);

  if (typeof result === "undefined") {
    return Maybe.Nothing();
  }

  return Maybe.Just(result);
};
