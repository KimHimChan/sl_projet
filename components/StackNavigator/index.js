import {createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Tobook from './Tobook';
import Services from './Services';
import Views from './Views';

const AppNavigator = createStackNavigator({
	Home, Tobook, Services, Views
},{
	intitialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);
