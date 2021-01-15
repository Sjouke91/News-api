import { TOP_HEADLINES_FETCHED } from "./actions";

const initialState = {
  all: {},
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case TOP_HEADLINES_FETCHED:
      return { ...state, all: action.payload };

    default:
      return state;
  }
}
