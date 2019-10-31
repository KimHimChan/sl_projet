import React from 'react';
import {Dimensions} from 'react-native';
import StackNavigator from './components/StackNavigator';

var {height, width} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
		<StackNavigator />
    );
  }
}
