import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './src/Nav/nav';
import Generate from './src/Generator/generate'
import ListItem from './src/Generator/listItem'

export default class App extends React.Component {

  state = {
    nameOfApp: 'My Awesome App',
    random: [20, 13],
  }

  onAddRamdom = () => {
    const random = Math.floor(Math.random()*100) + 1;
    this.setState(prevState => {
      return{
        random: [...prevState.random, random]
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp}/>
        <Generate add={this.onAddRamdom}/>

        <ListItem items={this.state.random}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,

  },
});
