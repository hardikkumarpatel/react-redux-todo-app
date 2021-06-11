const initialState = { list: [] }
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
            const { id, data } = action.payload;
            return {
              ...state,
              list: state.list.concat({ id: id, data: data})
            }

      case "DELETE_TODO":
           return {
             ...state,
             list: state.list.filter((e) => e.id !== action.payload)
           }

      default:
         return state;
    }
}

export default todoReducer;
