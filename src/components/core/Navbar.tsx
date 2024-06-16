import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../theme';

export const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<'today' | 'closet'>('today');

  return (
    <View style={styles.navbar}>
      <Text
        style={
          selectedItem === 'today'
            ? [styles.item, {fontWeight: 'bold'}]
            : styles.item
        }
        onPress={() => {
          setSelectedItem('today');
        }}>
        Today's Outfit
      </Text>

      <Text
        style={
          selectedItem === 'closet'
            ? [styles.item, {fontWeight: 'bold'}]
            : styles.item
        }
        onPress={() => {
          setSelectedItem('closet');
        }}>
        Closet
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    gap: 20,
  },
  item: {
    fontSize: 16,
    color: '#fff',

    ...theme.text,
  },
});
