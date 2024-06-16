import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../Avatar';
import theme from '../../theme';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>StyleGenie</Text>

      <Avatar />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin: 'auto',
    ...theme.text,
  },
});
