import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../constants';

function DeleteButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    borderRadius: 5,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.out_color,
  },
  text: {
    ...FONTS.h4,
    color: '#ffffff',
  },
});

export default DeleteButton;
