import { ADD_ARTICLE } from "../constants/action-types";
import { REMOVE_ARTICLE } from "../constants/action-types";
import { COMPLETE_ARTICLE } from "../constants/action-types";
import { EDIT_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === ADD_ARTICLE) {
    return { articles: [...state.articles, payload] };
  }
  if (type === REMOVE_ARTICLE) {
    return {
      articles: state.articles.filter((el, i) => i !== payload)
    };
  }
  if (type === COMPLETE_ARTICLE) {
    return {
      articles: state.articles.map((el, i) =>
        i === payload ? { ...el, isComplete: !el.isComplete } : el
      )
    };
  }
  if (type === EDIT_ARTICLE) {
    return {
      articles: state.articles.map((el, i) =>
        i === payload.index ? { ...el, input: payload.newTitle } : el
      )
    };
  }
  return state;
}

export default rootReducer;
