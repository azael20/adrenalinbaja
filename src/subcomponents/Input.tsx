import * as colors from '../global/colors';
import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

interface InputProps {
  style?: StyleProp<TextStyle>;
  isPassword?: boolean;
  placeholder: string;
  onChangeText: (text: string) => void;
  isEmail?: boolean;
}

export const Input = ({
  style,
  isPassword,
  placeholder,
  onChangeText,
  isEmail,
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={'gray'}
        autoCapitalize={'none'}
        autoComplete={'off'}
        autoCorrect={false}
        style={[styles.input, style]}
        secureTextEntry={isPassword}
        keyboardType={isEmail ? 'email-address' : 'default'}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#c4c4c4',
    color: colors.grayBackground,
    fontWeight: '600',
    fontSize: 13,
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: '100%',
    height: 48,
  },
});
