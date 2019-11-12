import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'
import Profile from './Profile'
export default class HomeScreen extends React.Component {
  render()
  {
    return (
      <View>
        <MenuButton navigation={this.props.navigation}/>
        <Profile/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
  },
    text: {
        fontSize: 30,
  }
});
