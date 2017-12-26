import {utils} from "../utils.js";
import I from "immutable";

export default function searchTodo(dispatch, searchText) {
  if (searchText.trim() !== "") {
    dispatch({
      type: "SEARCH_TODO_ITEM",
      data: I.fromJS({
        text: searchText
      })
    })
  dispatch({
    type: "ADD_CURRENT_SEARCH_TEXT",
    data: ""
  })
}
}
