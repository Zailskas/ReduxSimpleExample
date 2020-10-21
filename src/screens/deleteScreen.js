import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {showAll, deleteCar} from '../../store/actions/actions';
import 'react-native-gesture-handler';

class deleteScreen extends Component {
  componentDidMount() {
    this.props.showAll();
  }
  render() {
    const {cars} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Delete car</Text>
        <ScrollView style={styles.carsContainer}>
          {cars.cars.map((car, index) => (
            <View style={styles.cars} key={index}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.make}>
                  {car.make} {car.model}
                </Text>
              </View>
              <View style={styles.deleteButton}>
                <TouchableOpacity onPress={() => this.props.deleteCar(car.id)}>
                  <View style={styles.addButtonContainer}>
                    <Text style={styles.addButton}>DELETE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
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
const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
export default connect(mapStateToProps, {showAll, deleteCar})(deleteScreen);
