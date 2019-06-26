import React, { Component } from 'react';


import {
	
	StyleSheet,
	View,
	Image,

} from 'react-native';


import { Actions } from 'react-native-router-flux';


export default class Splash extends Component {

	componentWillMount() {

		setTimeout(() => {
			Actions.FancyCarListScreen();

	}, 2000);


	}

	render() {
		return (
			<View style={styles.informationContainer}>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	

	informationContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor:'#1D7EEE'
	},
});