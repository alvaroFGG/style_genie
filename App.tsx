import React from 'react';
import {StatusBar, View, StyleSheet, SafeAreaView} from 'react-native';
import {Header} from './src/components/core/Header';
import {Navbar} from './src/components/core/Navbar';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView>
        <Header />

        <Navbar />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    color: '#fff',
    height: '100%',
  },
});

export default App;
