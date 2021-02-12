import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Navbar} from './Navbar';
import {AddForm} from './AddForm';
import {Todo} from './Todo';
import {connect} from 'react-redux';
import {add_todo, check_todo, delete_todo} from './redux/actions/actions';


class TodoApp extends React.Component {
  state = {
    showAlert: true,
    showWelcomeAlert: true
  }

 render() {
   if (this.state.showWelcomeAlert) {
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
     this.setState({
       showWelcomeAlert: false
     })
   }

   return (
     <View style={{flex: 1}}>
       <StatusBar style="auto"/>
       <Navbar/>
       <AddForm onSubmit={this.props.onAdd}/>
       <FlatList
         style={{width: '100%'}}
         keyExtractor={item => item.id}
         data={this.props.todos}
         renderItem={({item}) => (
           <Todo
             todo={item}
             onCheck={this.props.onCheck}
             onDelete={this.props.onDelete}
             showAlert={this.state.showAlert}
             setShowAlert={() => this.setState({showAlert: false})}
           />
         )}
       />
     </View>
   );
 }


}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCheck: id => dispatch(check_todo(id)),
    onDelete: id => dispatch(delete_todo(id)),
    onAdd: title => dispatch(add_todo(title))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);


