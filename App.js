import {createStore} from 'redux';
import rootReducer from './src/redux/rootReducer';
import TodoApp from './src/TodoApp';
import {Provider} from 'react-redux';
import React from 'react';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}