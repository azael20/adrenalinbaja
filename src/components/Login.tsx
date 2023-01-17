import * as imageNames from '../assets/imageNames';
import * as colors from '../global/colors';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from '../subcomponents/Input';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/actions/activityActions';
import useAuthService from '../services/authService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useCheckCredentials } from '../hooks/useCheckCredentials';

export const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginService } = useAuthService();

  const dispatch = useDispatch();
  const { validateEmail, validateInput } = useCheckCredentials();

  const signIn = () => {
    if (!validateEmail(email)) {
      dispatch(setError('Check your email'));
      return;
    }
    if (!validateInput(password, 8, 'password')) {
      return;
    }

    const input = {
      email: email,
      password: password,
    };
    loginService(input);
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={styles.main}
      contentContainerStyle={{ alignItems: 'center' }}
      // contentContainerStyle={styles.contentScrollView}
    >
      <Text style={styles.title}>Adrenalin Baja{'\n'}Find out everything</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <Input
        placeholder={'example@example.com'}
        onChangeText={value => setEmail(value)}
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
      <Input
        placeholder={'********'}
        isPassword
        onChangeText={value => setPassword(value)}
        style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      />

      <TouchableOpacity style={styles.signInButton} onPress={signIn}>
        <Text style={styles.textButton}>SIGN IN</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Text
          style={styles.createAccountText}
          onPress={() => props.navigation.navigate('CreateAccount')}>
          Create Account
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: '20%',
    paddingHorizontal: 25,
  },

  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  subtitle: {
    color: '#757575',
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginBottom: 50,
  },
  signInButton: {
    width: '100%',
    height: 50,
    borderRadius: 3,
    backgroundColor: colors.redTabs,
    marginTop: 25,
    justifyContent: 'center',
    marginBottom: 5,
  },
  textButton: {
    color: colors.white,
    textAlign: 'center',
  },
  createAccountText: {
    color: colors.white,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    fontSize: 12,
    lineHeight: 35,
  },
  contentScrollView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});
