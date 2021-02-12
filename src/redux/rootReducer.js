import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actions/actionTypes';

const initialState = [
  {id: '1', title: 'Do a test task', done: true}
]

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {id: Date.now().toString(), title: action.payload, done: false}
      ]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    case CHECK_TODO:
      const newTodos = []
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done
        }
        newTodos.push(todo);
      })
      return newTodos
    default:
      return state;
  }
}