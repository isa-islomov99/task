import { SAVE_DATA, FILTER_TAG, TAG_VALUE, LOADER } from "./itemType";

export const saveDataToStore = (data) => ({
  type: SAVE_DATA,
  payload: data,
});

export const filterPostsByTag = (data) => ({
  type: FILTER_TAG,
  payload: data,
});
export const setValuesOfTag = (data) => ({
  type: TAG_VALUE,
  payload: data,
});

export const setLoading = (data) => ({
  type: LOADER,
  payload: data,
});
