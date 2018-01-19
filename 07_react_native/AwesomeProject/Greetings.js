import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

function Greeting (props) {
    return (
      <Text>Hello {props.name}!</Text>
    );
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
