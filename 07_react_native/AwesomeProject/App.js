import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Doc from './Doc.js';
import LotsOfGreetings from './Greetings.js';
import BlinkApp from './Blink.js';
import Flat from './Flatlist.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://cdn2.iconfinder.com/data/icons/sport-ii/96/09-256.png'}}
        />
      <Text>Nice bicycle !</Text>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Greetings Component :</Text>
      <LotsOfGreetings />
      <Text style={{fontSize:20,fontWeight:'bold'}}>Blink Component :</Text>
      <BlinkApp />
      <Text style={{fontSize:20,fontWeight:'bold'}}>Flatlist Component :</Text>
      <Flat />
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
});
