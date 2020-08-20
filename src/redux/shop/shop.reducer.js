import { UPDATE_COLLECTIONS } from "./shop.types";

const initialState = {
  collections: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};
