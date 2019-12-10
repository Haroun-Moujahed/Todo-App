import { ADD_ARTICLE } from "../constants/action-types";
import { REMOVE_ARTICLE } from "../constants/action-types";
import { COMPLETE_ARTICLE } from "../constants/action-types";
import { EDIT_ARTICLE } from "../constants/action-types";

export default function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload };
}
export function completeArticle(payload) {
  return { type: COMPLETE_ARTICLE, payload };
}
export function editArticle(payload) {
  return { type: EDIT_ARTICLE, payload };
}
