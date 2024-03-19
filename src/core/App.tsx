import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
