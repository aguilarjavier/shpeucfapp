import React, { Component } from 'react';
import {Text, View, StyleSheet }from 'react-native';

export default class EventsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Events</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF2E9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});