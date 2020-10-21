import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

class addScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add car</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 40,
    width: 60,
  },
  inputWrapper: {
    flex: 2,
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
  },
  addButton: {
    fontSize: 24,
    lineHeight: 24,
  },
  addButtonContainer: {
    width: 120,
    height: 60,
    backgroundColor: '#6cc900',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default addScreen;
