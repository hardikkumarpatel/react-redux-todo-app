export const addTodo = (input) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getSeconds().toString(),
      data: input
    }
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
