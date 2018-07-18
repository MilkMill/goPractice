import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';

import Nav from './src/Nav/Nav';
import Generate from './src/Generator/Generate';
import ListItem from './src/Generator/ListItem';
import Input from './src/Input/Input';
import PickerComponent from './src/Picker/Picker';
import Palitra from './src/assets/Images/palitra.jpg';
import Planet from './src/assets/Images/planet.jpg';
import ModalComponent from './src/Modal/Modal';

export default class App extends React.Component {

  state = {
    nameOfApp: 'goPractice App',
    random: [20, 13],
    loading: 'true',
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
        {/* <Generate add={this.onAddRamdom}/>

        <ListItem items={this.state.random}
        delete={this.onItemDelete}
        /> */}

        {/* <Input /> */}
        {/* <PickerComponent /> */}

        {/* <ActivityIndicator
          size="small"
          color="#cecece"
        /> */}

        {/* <Image 
          source={Planet}
          style={styles.planet}
          resizeMode="contain"
          onLoadEnd={() => alert('image loaded')}

        /> */}

       {/*  <Image 
          source={{uri : 'https://picsum.photos/400/400'}}
          style={styles.planet}
          resizeMode="contain"
          onLoadEnd={() => alert('image loaded')}

        />
 */}
        <ModalComponent />

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
  },
  planet: {
    width: '100%',
    height: 300,
    marginTop: 10
  } 
});
