import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>To do:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,

    backgroundColor: '#5B507A'

  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 26
  }
})