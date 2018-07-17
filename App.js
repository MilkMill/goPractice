import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Nav from './src/Nav/Nav';
import Generate from './src/Generator/Generate';
import ListItem from './src/Generator/ListItem';
import Input from './src/Input/Input';
import PickerComponent from './src/Picker/Picker';


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

  onItemDelete = (i) => {
    const newArray = this.state.random.filter((item, index) => {
      return i !== index;
    });
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp}/>
        
        <ScrollView
        style={{width:'100%'}}
        //onContentSizeChange={(w, h) => alert(h)}
        //onMomentumScrollBegin={()=>alert('begin')}
        //onMomentumScrollEnd={()=>alert('end')}
        //onScroll={()=>alert('scrolling')}
        >
        <View
        style={styles.wrapper}
        >
        <Generate add={this.onAddRamdom}/>

        <ListItem items={this.state.random}
        delete={this.onItemDelete}
        />

        {/* <Input /> */}
        <PickerComponent />
        </View>
        </ScrollView>
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
  wrapper: {
    flex: 1,
    width:'100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
