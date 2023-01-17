import * as imageNames from '../assets/imageNames';
import * as colors from '../global/colors';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from '../subcomponents/Input';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/actions/activityActions';
import useAuthService from '../services/authService';
import { RegisterProps } from '../redux/types/loginTypes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useCheckCredentials } from '../hooks/useCheckCredentials';

interface TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const CreateAccount = (props: any) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { registerService } = useAuthService();
  const { validateEmail, validateInput, checkConfirmPassword } =
    useCheckCredentials();
  const dispatch = useDispatch();

  const Text = ({ text, style, onPress }: TextProps) => {
    return (
      <RNText style={style} onPress={onPress}>
        {text}
      </RNText>
    );
  };

  const signUp = () => {
    if (!validateInput(name, 3, 'name')) {
      return;
    } else if (!validateInput(lastname, 3, 'lastname')) {
      return;
    } else if (!validateEmail(email)) {
      dispatch(setError('Your email is incorrect'));
      return;
    } else if (!validateInput(password, 8, 'password')) {
      return;
    } else if (!checkConfirmPassword(password, confirmPassword)) {
      return;
    }

    const input: RegisterProps = {
      name,
      lastName: lastname,
      email,
      password,
      confirm_password: confirmPassword,
    };
    registerService(input);
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image
          source={imageNames.trophyTruck}
          style={styles.logo}
          resizeMode={'contain'}
        />
      </View>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.main}
        contentContainerStyle={styles.contentScrollView}>
        <Text
          text={'Adrenalin Baja\nFind out everything'}
          style={styles.title}
        />
        <Text text={'Create account now!'} style={styles.subtitle} />

        <Input
          placeholder={'First name'}
          onChangeText={value => setName(value)}
          style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        />

        <Input
          placeholder={'Last name'}
          onChangeText={value => setLastname(value)}
        />

        <Input
          placeholder={'example@example.com'}
          isEmail
          onChangeText={value => setEmail(value)}
        />

        <Input
          placeholder={'Password'}
          isPassword
          onChangeText={value => setPassword(value)}
        />

        <Input
          placeholder={'Confirm password'}
          isPassword
          onChangeText={value => setConfirmPassword(value)}
          style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
        />

        <TouchableOpacity style={styles.signInButton} onPress={signUp}>
          <Text text={'SIGN UP'} style={styles.textButton} />
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Text
            text={'Sign in'}
            style={styles.createAccountText}
            onPress={() => props.navigation.pop()}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: '20%',
  },
  logo: {
    width: 600,
    height: 300,
    opacity: 0.05,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    right: 0,
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
