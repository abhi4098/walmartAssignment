 import React, { Component } from 'react';
 import { View } from "react-native";
import { Scene ,Router} from 'react-native-router-flux';
import { StyleSheet } from "react-native";
import Splash from './components/screens/Splash';

import FancyCarListScreen from './components/screens/FancyCarListScreen';









const RouterComponent = () => {
	return(
		<Router
		navigationBarStyle={styles.navBar}>
        <Scene key ="root" >
		<Scene key="Splash"             
				   component={Splash}              
				   hideNavBar={true} 
				   initial
				   
				    />
			
			
           <Scene
	                key="FancyCarListScreen"      
	                component={FancyCarListScreen}  
					title = "Fancy Car List"
					titleStyle={styles.navTitlestyle}
					renderLeftButton={<View></View>} 
					
					
	                />

				
 </Scene>

	
	
	


		</Router>  
	);
};

const styles = StyleSheet.create({
	
	navBar: {
	  backgroundColor:'#1D7EEE',
	},
	navTitlestyle: {
		textAlign: 'center' ,
		marginLeft:50, 
		fontSize: 20,
		color:"#fff"
	}
  
  
  });
export default RouterComponent; 