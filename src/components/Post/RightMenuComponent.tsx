import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import { VideosProps } from '../../types/types';
import useFormatNumbers from '../../hooks/useFormatNumbers';

export const RightMenuComponent = (props: any) => {
  const [post, setPost] = useState<VideosProps>(props.post);
  const [liked, setLiked] = useState(false);
  const [commentsOpened, setCommentsOpened] = useState(false);
  const [shareOpened, setShareOpened] = useState(false);
  const { nFormatter } = useFormatNumbers();

  const onPressLike = () => {
    // setLiked(!post.like);
    if (!post.like) {
      setPost({
        ...post,
        likes: post.likes + 1,
        like: true,
      });
    } else {
      setPost({
        ...post,
        likes: post.likes - 1,
        like: false,
      });
    }
  };

  const onPressComments = () => {
    console.warn(commentsOpened ? 'Comments opened' : 'comments closed');
    setCommentsOpened(!commentsOpened);
  };

  const onPressShare = () => {
    console.warn(shareOpened ? 'Share opened' : 'Share closed');
    setShareOpened(!shareOpened);
  };

  return (
    <View style={styles.rightContainer}>
      {/* Like */}
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressLike}>
          {!post.like ? (
            <Image
              source={require('../../assets/icons/like-unfocus.png')}
              style={{ width: 25, height: 25 }}
            />
          ) : (
            <Image
              source={require('../../assets/icons/like-focus.png')}
              style={{ width: 25, height: 25 }}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.textMenu}>{nFormatter(post.likes, 1)}</Text>
      </View>

      {/* Comment */}
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressComments}>
          <Image
            source={require('../../assets/icons/commentary.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>

        <Text style={styles.textMenu}> {nFormatter(post.comments, 1)}</Text>
      </View>

      {/* Share */}
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressShare}>
          <Image
            source={require('../../assets/icons/share.png')}
            style={{ width: 25, height: 25, transform: [{ scaleX: -1 }] }}
          />
        </TouchableOpacity>

        <Text style={styles.textMenu}> {nFormatter(post.shared, 1)}</Text>
      </View>
    </View>
  );
};
