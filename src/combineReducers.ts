import { mergeArray } from "most";
import { Reducer, Mapper } from "./types";

type Spec = {
  [key: string]: Reducer<any>;
};

export default (spec: Spec) =>
  mergeArray(
    Object.keys(spec).map((name: string) =>
      spec[name].map((mapper: Mapper<any>) => (state = {}) => ({
        ...state,
        [name]: mapper(state[name])
      }))
    )
  );
