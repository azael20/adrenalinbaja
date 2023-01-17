import React from 'react';
import {
  ActivityIndicator,
  Alert, Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../components/Home';
import * as colors from '../global/colors';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {
  DarkTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { Tracking } from '../components/Tracking';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Login } from '../components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import AwesomeAlert from 'react-native-awesome-alerts';
import { clearError } from '../redux/actions/activityActions';
import { CreateAccount } from '../components/CreateAccount';
import { AccountComponent } from '../components/AccountComponent';
import { NewsDetails } from '../components/NewsDetails';
import { LivesFeed } from '../components/LivesFeed';
import { UploadVideo } from '../components/UploadVideo';
import { Map } from '../components/Map';

// const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LivesFeedStack = createStackNavigator();
const UploadVideoStack = createStackNavigator();
const MapStack = createStackNavigator();

const AccountStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const theme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: colors.grayBackground,
    card: colors.white,
  },
};

const screen_options = (
  navigation: any,
  headerTitle?: string,
  title?: string
): StackNavigationOptions => {
  return {
    headerTitle: headerTitle,
    title: title,
    headerStyle: {
      backgroundColor: colors.redTabs,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: 16,
    },
    headerTitleAlign: 'center',
  };
};

const HomeStackScreen = ({ navigation }: any) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Home'}
        component={Home}
        options={{
          ...screen_options(navigation),
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const LivesFeedStackScreen = ({ navigation }: any) => {
  return (
    <LivesFeedStack.Navigator>
      <LivesFeedStack.Screen
        name={'LivesFeed'}
        component={LivesFeed}
        options={{
          ...screen_options(navigation),
          headerShown: false,
        }}
      />
    </LivesFeedStack.Navigator>
  );
};

const UploadVideoStackScreen = ({ navigation }: any) => {
  return (
    <UploadVideoStack.Navigator>
      <UploadVideoStack.Screen
        name={'UploadVideo'}
        component={UploadVideo}
        options={{
          ...screen_options(navigation),
          headerShown: false,
        }}
      />
    </UploadVideoStack.Navigator>
  );
};

const MapStackScreen = ({ navigation }: any) => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name={'Map'}
        component={Map}
        options={{
          ...screen_options(navigation),
          headerShown: false,
        }}
      />
    </MapStack.Navigator>
  );
};

const AccountStackScreen = ({ navigation }: any) => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name={'Account'}
        component={AccountComponent}
        options={{
          ...screen_options(navigation, 'My Account'),
          headerShown: false,
        }}
      />
    </AccountStack.Navigator>
  );
};

const TabsStack = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 65,
          backgroundColor: '#000',
        },
      }}>
      <Tabs.Screen
        name={'HomeStackScreen'}
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/home-focus.png')}
                />
              ) : (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/home-unfocus.png')}
                />
              )}
              <Text
                style={[
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.white : colors.grayUnfocused,
                    fontWeight: focused ? '500' : '400',
                  },
                ]}>
                Inicio
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={'LivesFeedStackScreen'}
        component={LivesFeedStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/live-focus.png')}
                />
              ) : (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/live-unfocus.png')}
                />
              )}
              <Text
                style={[
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.white : colors.grayUnfocused,
                    fontWeight: focused ? '500' : '400',
                  },
                ]}>
                Directos
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={'UploadVideoStackScreen'}
        component={UploadVideoStackScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                style={{ width: 35, height: 35 }}
                source={require('../assets/icons/add.png')}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={'MapStackScreen'}
        component={MapStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/world-focus.png')}
                />
              ) : (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/world-unfocus.png')}
                />
              )}
              <Text
                style={[
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.white : colors.grayUnfocused,
                    fontWeight: focused ? '500' : '400',
                  },
                ]}>
                Mapa
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={'AccountStackScreen'}
        component={AccountStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/profile-focus.png')}
                />
              ) : (
                <Image
                  style={styles.iconStyles}
                  source={require('../assets/icons/profile-unfocus.png')}
                />
              )}
              <Text
                style={[
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.white : colors.grayUnfocused,
                    fontWeight: focused ? '500' : '400',
                  },
                ]}>
                Perfil
              </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const RootNavigator = ({ navigation }: any) => {
  const session = useSelector((state: RootState) => state.sessionState);
  const activity = useSelector((state: RootState) => state.activityState);
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar hidden barStyle={'light-content'} />
      <View style={{ flex: 1 }}>
        <AwesomeAlert
          show={(activity.errorMessage ?? '').length > 0}
          showProgress={false}
          title={'Error'}
          message={activity.errorMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor={colors.redTabs}
          onConfirmPressed={() => dispatch(clearError())}
        />
        <NavigationContainer theme={theme}>
          {/*{!session.isLoggedIn ? (*/}
          {/*  <AuthStack.Navigator>*/}
          {/*    <AuthStack.Screen*/}
          {/*      name={'Login'}*/}
          {/*      component={Login}*/}
          {/*      options={{*/}
          {/*        headerShown: false,*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <AuthStack.Screen*/}
          {/*      name={'CreateAccount'}*/}
          {/*      component={CreateAccount}*/}
          {/*      options={{*/}
          {/*        headerShown: false,*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </AuthStack.Navigator>*/}
          {/*) : (*/}
          <Stack.Navigator>
            {/*<Stack.Screen*/}
            {/*  options={{ headerShown: false }}*/}
            {/*  name={'HomeStackScreen'}*/}
            {/*  component={HomeStackScreen}*/}
            {/*/>*/}
            <Stack.Screen
              options={{ headerShown: false }}
              name={'TabsStack'}
              component={TabsStack}
            />
            <Stack.Screen
              name={'AccountStack'}
              component={AccountStackScreen}
              options={{
                ...screen_options(navigation, 'My Account'),
              }}
            />
            <Stack.Screen
              name={'NewsDetails'}
              component={NewsDetails}
              options={({ route }: any) => ({
                ...screen_options(navigation),
                headerBackTitleVisible: false,
                headerTransparent: true,
              })}
            />
          </Stack.Navigator>
          {/*)}*/}
        </NavigationContainer>
        {activity.isLoading && (
          <View
            onTouchEnd={() => null}
            pointerEvents={'none'}
            style={styles.activityIndicator}>
            <ActivityIndicator color={colors.redTabs} size={'large'} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  tabBarLabel: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 10,
    // fontFamily: 'Roboto',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: colors.transparentWhite,
  },
  iconStyles: {
    width: 20,
    height: 20,
    marginBottom: 3,
  },
});
