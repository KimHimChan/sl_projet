import React, {PureComponent} from 'react';
import { Text, View, Button,  Dimensions, StyleSheet,
				TouchableHighlight} from 'react-native';

var {height, width} = Dimensions.get('window');

class Home extends PureComponent {
	render(){
		return(
			<View style={styles.container}>
				<TouchableHighlight
					style={styles.button}
					onPress={this.TobookPress}>
					<Text>Забронировать</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.button}
					onPress={this.ServicesPress}>
					<Text>Услуги</Text>
				</TouchableHighlight>
			</View>
		);
	}

	TobookPress = () => {
		const {navigation: {navigate}} = this.props;
		navigate('Tobook');
	}
	ServicesPress = () => {
		const {navigation: {navigate}} = this.props;
		navigate('Services');
	}
}

const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
		padding: 20
	},
	button:{
		height: 40,
		top: height-(height/2),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		marginBottom: 10,
		borderRadius: 10,
	}
});

export default Home;
