import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {addCar} from '../../store/actions/actions';
import uuid from 'react-uuid';

class addScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
    };
  }
  handleSubmit = () => {
    this.props.addCar(this.state.make, this.state.model, uuid());
    this.setState({make: '', model: ''});
  };
  makeChange(make) {
    this.setState({make});
  }
  modelChange(model) {
    this.setState({model});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add car</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.make}
            placeholder="Make"
            onChangeText={(text) => this.makeChange(text)}
          />
          <TextInput
            style={styles.input}
            value={this.state.model}
            placeholder="Model"
            onChangeText={(text) => this.modelChange(text)}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>INSERT</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  addButtonText: {
    fontSize: 24,
    lineHeight: 24,
  },
  addButton: {
    width: 120,
    height: 60,
    backgroundColor: '#6cc900',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  addButtonContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
export default connect(mapStateToProps, {addCar})(addScreen);
