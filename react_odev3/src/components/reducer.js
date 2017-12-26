import I from "immutable";

function reducer(state = I.Map(), action) {
  switch (action.type) {

    case "ADD_CURRENT_INPUT":
      return state.set("currentInput", action.data);
 

    case "ADD_TODO_ITEM":
      const currentItems = state.get("todoItems", I.List());
      return state.set("todoItems", currentItems.push(action.data));


    case "DELETE_TODO_ITEM":
      const currentList = state.get("todoItems", I.List());
      const newList = currentList.filter(each => each.get("id") !== action.id);

      return state.set("todoItems", newList);

 
    case "ADD_CURRENT_SEARCH_TEXT":
      return state.set("searchText", action.data);
     
	  
    case "SEARCH_TODO_ITEM":
	  const currentsearchList = state.get("todoItems", I.List());
	  const searchList = currentsearchList.filter(each => each.get("text").includes(action.data.get("text")));
      return state.set("searchTodoItems", searchList)

    default:
      return state;
  }
}

export default reducer;
