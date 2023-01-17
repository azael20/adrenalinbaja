import React from 'react';
import * as colors from '../global/colors';
import WebView from 'react-native-webview';
export const Tracking = () => {
  return (
    <WebView
      style={{ flex: 1, backgroundColor: colors.grayBackground }}
      source={{
        uri: 'https://score-international.com/2021/baja500/livetracking/lt.html',
      }}
    />
  );
};
