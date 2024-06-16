import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

export const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <Text>AF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.text,
  },
});
