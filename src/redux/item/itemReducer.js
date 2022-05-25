import { SAVE_DATA, FILTER_TAG, TAG_VALUE, LOADER } from "./itemType";

const initialState = {
  data: [],
  isModalOpen: false,
  tagsData: [],
  valueOfTag: [],
  loading: false,
};

export const cardData = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action?.payload,
      };
    case FILTER_TAG:
      return {
        ...state,
        tagsData: action?.payload,
      };
    case TAG_VALUE:
      return {
        ...state,
        valueOfTag: action?.payload,
      };
    case LOADER:
      return {
        ...state,
        loading: action?.payload,
      };
    default:
      return { state };
  }
};
