import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { VideosProps } from '../../types/types';

export const InfoComponent = (props: any) => {
  const [post, setPost] = useState<VideosProps>(props.post);

  return (
    <LinearGradient
      pointerEvents={'box-none'}
      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
      style={styles.infoContainer}>
      {/* Location */}
      <TouchableOpacity
        onPress={() => console.warn('Location')}
        style={styles.location}>
        <MaterialIcons name={'location-pin'} size={15} color={'white'} />
        <Text style={{ color: 'white', marginLeft: 5, fontSize: 12 }}>
          {post.location}
        </Text>
      </TouchableOpacity>

      {/* User */}
      <View style={styles.userInfo}>
        <Image
          source={require('../../assets/new2.jpg')}
          style={{
            height: 40,
            width: 40,
            marginRight: 5,
            borderColor: 'white',
            borderWidth: 2,
          }}
          resizeMode={'cover'}
          borderRadius={100}
        />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      {/* Descripción */}
      <Text style={{ color: 'white', fontSize: 12, marginTop: 10 }}>
        {post.description}
      </Text>
    </LinearGradient>
  );
};
