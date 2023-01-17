import React, { memo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Video, { LoadError, OnBufferData } from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Post = ({ item, index, currentIndex }: any) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const [like, setLike] = useState(item.isLike);
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [mute, setMute] = useState(true);
  const onBuffer = (buffer: OnBufferData) => {
    console.log('buffring', buffer);
  };
  const onError = (error: LoadError) => {
    console.log('error', error);
  };

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onLoad={() => console.log('loading..')}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={{ uri: item.url }}
          hideShutterView={true}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Post;
