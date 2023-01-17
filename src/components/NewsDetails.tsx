import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import * as colors from '../global/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import useGalleryService from '../services/galleryService';

const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export const NewsDetails = (props: any) => {
  const item = props.route.params.item;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const { galleryService } = useGalleryService();
  const [gallery, setGallery] = useState([]);

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const getGallery = () => {
    galleryService().then(res => {
      setGallery(res);
    });
  };

  useEffect(() => {
    getGallery();
  }, []);

  const _renderItem = (i: any, index: number) => {
    return (
      <View key={index}>
        <Image
          source={{ uri: i.url }}
          resizeMode={'cover'}
          style={{
            width: 250,
            height: 200,
            marginRight: 10,
            borderRadius: 5,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => props.navigation.pop()}>
        <Ionicons
          name={'chevron-back-outline'}
          color={colors.redTabs}
          size={15}
        />
      </TouchableOpacity>

      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}>
        <View style={{ paddingTop: H_MAX_HEIGHT }}>
          {/** Page contant goes here **/}

          <View style={{ padding: 10 }}>
            <Text
              style={{ color: colors.white, fontWeight: 'bold', fontSize: 30 }}>
              {item.title}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={{ color: colors.white }}>{item.description}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.newsTitle}>Gallery</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: '7%',
              marginTop: 10,
            }}
            horizontal
            data={gallery}
            renderItem={({ item, index }: any) =>
              _renderItem(item._data, index)
            }
            overScrollMode={'never'}
          />
          <View style={styles.container} />
        </View>
      </ScrollView>

      {/**
       * We put the header at the bottom of
       * our JSX or it will not take priority
       * on Android (for some reason, simply
       * setting zIndex does not work)
       **/}
      <Animated.View
        style={[styles.imageContainer, { height: headerScrollHeight }]}>
        <ImageBackground
          source={{ uri: item.url }}
          style={{
            flex: 1,
          }}
          resizeMode={'cover'}>
          <LinearGradient
            colors={[colors.transparent, colors.grayBackground]}
            style={{
              position: 'absolute',
              bottom: 0,
              height: '55%',
              width: '100%',
            }}
          />
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    overflow: 'hidden',
    zIndex: 999,
  },
  container: {
    padding: 20,
    backgroundColor: colors.grayBackground,
  },
  button: {
    position: 'absolute',
    zIndex: 99999,
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    elevation: 10,
    borderRadius: 100,
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesContainer: {
    paddingHorizontal: '7%',
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.white,
  },
});
