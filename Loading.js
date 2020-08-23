import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text style={styles.text}>현재 계신곳의 날씨를 알려드리겠습니다.</Text>
      <ActivityIndicator size='large' color='#0000ff' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FDF6AA',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
});
export default Loading;
