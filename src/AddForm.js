import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert} from 'react-native';
import {Button} from 'react-native-elements';

export const AddForm = props => {

  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Write a title of to-do!');
    }
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={'What is in your mind?'}
        autoCorrect={false}
        autoCapitalize='none'
        autoCompleteType={'off'}
        onSubmitEditing={pressHandler}
      />
      <Button title='+'
              titleStyle={{
                fontWeight: 'bold',
                fontSize: 26,
                color: '#5B507A',

              }}
              buttonStyle={{
                backgroundColor: 'rgba(0,0,0,.0)',
              }}
              onPress={pressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: "#5B507A",
    fontSize: 26,
    padding: 5
  },

})