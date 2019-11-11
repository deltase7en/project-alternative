import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'
import Explore from './Explore'
export default class HomeScreen extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <Explore/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
    text: {
        fontSize: 30,
  }
});
