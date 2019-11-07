import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from '../screens/HomeScreen'
import MenuDrawer from '../components/MenuDrawer'
import MapLocation from '../screens/Map'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
        },
        Map: {
            screen: MapLocation
        },
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);