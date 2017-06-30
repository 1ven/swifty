import { Stream, mergeArray } from "most";
import { Reducer, Mapper, ReducersSpec } from "./types";

/**
 * Combines reducers spec into one stream.
 *
 * @param spec Reducers stream spec.
 * @return Returns new reducers stream.
 */
export default (spec: ReducersSpec): Reducer<any> =>
  mergeArray(
    Object.keys(spec).map((name: string) =>
      spec[name].map((mapper: Mapper<any>) => (state = {}) => ({
        ...state,
        [name]: mapper(state[name])
      }))
    )
  );
