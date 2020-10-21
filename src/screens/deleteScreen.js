import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

class deleteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Delete car</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
  },
  cars: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 22,
    color: '#999',
    fontWeight: 'bold',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    fontSize: 24,
    lineHeight: 24,
  },
  addButtonContainer: {
    width: 100,
    height: 50,
    backgroundColor: 'tomato',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default deleteScreen;
