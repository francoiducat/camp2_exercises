import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

class Doc extends Component {
  render() {
    return (
      <ScrollView>
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
    );
  }
}

export default Doc;
