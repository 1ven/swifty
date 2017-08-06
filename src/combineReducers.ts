import { Stream, mergeArray } from "most";
import { Reducer, Mapper, ReducersSpec } from "./types";

/**
 * Combines reducers spec into one stream.
 *
 * @param spec Reducers stream spec.
 * @return Returns new reducers stream.
 */
export default spec =>
  mergeArray(
    Object.keys(spec).map((name: string) =>
      spec[name].map((mapper: Mapper<any>) => (state = {} as any) => ({
        ...state,
        [name]: mapper(state[name])
      }))
    )
  );
