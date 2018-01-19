import React, { Component } from 'react';
import { FlatList, Text} from 'react-native';

export default class Flat extends React.Component {
  render() {
    return (
      <FlatList
      data={[{key: 'first item'}, {key: '2nd item'}]}
      renderItem={({item}) => <Text>{item.key}</Text>}
    />);
  }
}
