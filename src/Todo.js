import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';

export const Todo = (props) => {



  const longPressHandler = () => {
    props.showAlert
    ? Alert.alert(
      'Delete to-do',
      'Are you sure you want to delete this to-do?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => props.onDelete(props.todo.id),
          style: 'destructive'
        },
        {
          text: 'Do not show again',
          onPress: () => props.setShowAlert(false),
          style: 'default'
        },
      ]
    )
      : props.onDelete(props.todo.id)

  }

  return (
    <TouchableOpacity
      onLongPress={ () => longPressHandler()}
    >
      <View style={styles.todo}>
        <CheckBox
          checked={props.todo.done}
          onPress={props.onCheck}
        />

        <Text style={styles.text}>{props.todo.title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 24,
  }
});