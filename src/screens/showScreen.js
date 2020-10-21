import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

class showScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cars</Text>
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
    flex: 1,
  },
  cars: {
    padding: 20,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default showScreen;
