import React from 'react';
import { Provider, useSelector } from 'react-redux';
import RootNavigator from './src/navigator/rootNavigator';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { rootReducer } from './src/redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { SafeAreaView } from 'react-native';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  persistedReducer
);

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/*<SafeAreaView style={{ flex: 1 }}>*/}
          <RootNavigator />
        {/*</SafeAreaView>*/}
      </PersistGate>
    </Provider>
  );
};

export default App;
