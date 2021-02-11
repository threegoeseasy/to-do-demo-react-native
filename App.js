import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Navbar} from './src/Navbar';
import {AddForm} from './src/AddForm';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    {id: '1', title: 'Do a test task', done: true}
  ]);
  const [showAlert, setShowAlert] = useState(true);
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(true);

  const deleteTodo = (id) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  const checkTodo = (id) => {
    const newTodos = []
    todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      newTodos.push(todo);
    })
    setTodos(newTodos);
  }

  const addTodo = (title) => {
    const todo = {
      id: Date.now().toString(),
      title,
      done: false
    };

    setTodos(prev => [...prev, todo]);
  }

  if (showWelcomeAlert) {
    Alert.alert(
      'Welcome!',
      '1. Press "+" or "return" to add new to-do\n 2. Tap and hold to-do to delete',
      [
        {
          text: 'Got it!',
          style: 'cancel'
        },
      ],
    );
    setShowWelcomeAlert(false);
  }


  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto"/>
      <Navbar/>
      <AddForm onSubmit={addTodo}/>
      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => (
          <Todo
            todo={item}
            onCheck={() => checkTodo(item.id)}
            onDelete={deleteTodo}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        )}
      />
    </View>
  );
}


