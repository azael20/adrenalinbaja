import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as colors from '../global/colors';
import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useNewsService from '../services/newsService';
import useGalleryService from '../services/galleryService';

import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MediaStream,
  RTCView,
} from '@videosdk.live/react-native-sdk';
import { useLiveStreamService } from '../services/liveStreamService';
import { JoinScreen } from './JoinScreen';
import { MeetingView } from './MeetingView';

export const CreateStream = (props: any) => {
  const { newsService } = useNewsService();
  const { galleryService } = useGalleryService();
  const { token, createMeeting } = useLiveStreamService();

  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [meetingId, setMeetingId] = useState(null);

  const getNews = () => {
    newsService().then(res => {
      setNews(res);
    });
  };

  const getGallery = () => {
    galleryService().then(res => {
      setGallery(res);
    });
  };

  const getMeetingId = async (id: string) => {
    const meetingID = id == null ? await createMeeting(token) : id;
    setMeetingId(meetingID.meetingId);
  };

  useEffect(() => {
    getNews();
    getGallery();
  }, []);

  useEffect(() => {
    console.log('MEETING ID', meetingId);
  }, [meetingId]);


  const { width } = Dimensions.get('window');

  const _renderItem = (item: any, index: number) => {
    return (
      <View key={index}>
        <Image
          source={{ uri: item.url }}
          style={{
            width: 250,
            height: 200,
            flex: 1,
            marginRight: 10,
            borderRadius: 5,
          }}
        />
      </View>
    );
  };

  // return (
  //   <ScrollView
  //     overScrollMode={'never'}
  //     style={styles.main}
  //     showsVerticalScrollIndicator={false}>
  //     <TouchableOpacity
  //       style={styles.logoutButton}
  //       onPress={() => props.navigation.navigate('AccountStack')}>
  //       <Ionicons name={'person'} color={colors.redTabs} size={15} />
  //     </TouchableOpacity>
  //     <View style={{ paddingBottom: 110 }}>
  //       <ImageBackground
  //         source={require('../assets/frontpage.jpg')}
  //         style={styles.front_image}
  //         resizeMode={'cover'}>
  //         <LinearGradient
  //           colors={[colors.transparent, colors.grayBackground]}
  //           style={{
  //             position: 'absolute',
  //             bottom: 0,
  //             height: '55%',
  //             width: '100%',
  //           }}
  //         />
  //         <Text
  //           style={{
  //             color: colors.white,
  //             letterSpacing: width * 0.09,
  //             marginTop: 5,
  //             textAlign: 'center',
  //           }}>
  //           NEXT RACE
  //         </Text>
  //       </ImageBackground>
  //
  //       <View style={styles.titlesContainer}>
  //         <Text style={styles.title}>San Felipe Baja 250</Text>
  //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //           <Icon name={'clock'} size={15} color={'#858585'} />
  //           <Text style={styles.subtitle}>
  //             10:00 AM | San Felipe B.C, Mexico | Salida Trophy Trucks
  //           </Text>
  //         </View>
  //         <View style={{ marginTop: 30 }}>
  //           <Text style={styles.newsTitle}>News</Text>
  //           {news.map((i: any, index: number) => {
  //             const item = i._data;
  //             return (
  //               <TouchableOpacity
  //                 onPress={() =>
  //                   props.navigation.navigate('NewsDetails', {
  //                     item,
  //                     title: item.title,
  //                   })
  //                 }
  //                 activeOpacity={0.7}
  //                 style={styles.newContainer}
  //                 key={index}>
  //                 <Image
  //                   source={{ uri: item.url }}
  //                   resizeMode={'cover'}
  //                   style={{
  //                     height: 80,
  //                     width: 80,
  //                     borderRadius: 10,
  //                   }}
  //                 />
  //                 <View style={{ flex: 1 }}>
  //                   <Text numberOfLines={2} style={styles.newTitle}>
  //                     {item.title}
  //                   </Text>
  //                   <Text numberOfLines={2} style={styles.newSubtitle}>
  //                     {item.description}
  //                   </Text>
  //                 </View>
  //                 <View
  //                   style={{
  //                     transform: [{ rotate: '-2deg' }],
  //                     backgroundColor: colors.redTabs,
  //                     width: '100%',
  //                     height: 30,
  //                     zIndex: -2,
  //                     alignItems: 'center',
  //                     justifyContent: 'center',
  //                     position: 'absolute',
  //                     bottom: -25,
  //                     right: 0,
  //                   }}
  //                 />
  //               </TouchableOpacity>
  //             );
  //           })}
  //         </View>
  //       </View>
  //       <View style={{ ...styles.titlesContainer, marginTop: 20 }}>
  //         <Text style={styles.newsTitle}>Gallery</Text>
  //       </View>
  //
  //       <FlatList
  //         showsHorizontalScrollIndicator={false}
  //         contentContainerStyle={{
  //           paddingHorizontal: '7%',
  //           marginTop: 10,
  //         }}
  //         horizontal
  //         data={gallery}
  //         renderItem={({ item, index }: any) => _renderItem(item._data, index)}
  //         overScrollMode={'never'}
  //       />
  //     </View>
  //   </ScrollView>
  // );
  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6FF' }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: 'Test User',
        }}
        token={token}>
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginBottom: 50,
  },
  front_image: {
    width: '100%',
    height: 150,
  },
  titlesContainer: {
    paddingHorizontal: '7%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
    marginLeft: 10,
    color: colors.white,
  },
  subtitle: {
    fontSize: 11,
    color: '#858585',
    fontWeight: '700',
    marginLeft: 3,
  },
  newContainer: {
    backgroundColor: '#242636',
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  newTitle: {
    color: colors.white,
    fontWeight: '600',
    marginLeft: 10,
    flex: 1,
  },
  newSubtitle: {
    color: '#a8a8a8',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 10,
    flex: 1,
  },
  logoutButton: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: colors.white,
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 1,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
