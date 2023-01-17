import * as colors from '../global/colors';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { logout } from '../redux/actions/loginActions';

export const AccountComponent = () => {
  const dispatch = useDispatch();
  const session = useSelector((state: RootState) => state.sessionState);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Name</Text>
        <Text style={styles.userInfo}>
          {session.user.name}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Lastname</Text>
        <Text style={styles.userInfo}>{session.user.lastName}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Email</Text>
        <Text style={styles.userInfo}>{session.user.email}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Username</Text>
        <Text style={styles.userInfo}>{session.user.username}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.logoutButton}
        onPress={() => dispatch(logout())}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 50,
  },
  container: {
    width: '100%',
    height: 65,
    backgroundColor: '#252534',
    marginTop: 15,
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  titleContainer: {
    color: '#c7c7c7',
    fontSize: 12,
  },
  userInfo: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    height: 35,
    backgroundColor: colors.redTabs,
    marginTop: 15,
    borderRadius: 100,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  logoutText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
});
