import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  title: {
    color: '#ee4e62',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },
  logo: {
    width: 48,
    height: 24,
  },
});

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>GYMPOINT</Text>
    </View>
  );
}
