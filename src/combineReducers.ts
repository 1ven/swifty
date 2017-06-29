import { mergeArray } from "most";
import { Reducer, Mapper } from "./types";

type Spec = {
  /**
   * Spec with reducer streams as values.
   */
  [key: string]: Reducer<any>;
};

/**
 * Combines reducers spec into one stream.
 *
 * @param spec Reducers stream spec.
 * @return Returns new reducers stream stream.
 */
export default (spec: Spec) =>
  mergeArray(
    Object.keys(spec).map((name: string) =>
      spec[name].map((mapper: Mapper<any>) => (state = {}) => ({
        ...state,
        [name]: mapper(state[name])
      }))
    )
  );
