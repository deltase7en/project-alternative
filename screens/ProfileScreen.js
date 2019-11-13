import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'
import Profile from './Profile'
export default class HomeScreen extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <Profile/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#461C5D',
},
  text: {
      fontSize: 30,
}
});
