import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import { getVideos } from '../services/getVideos';
import { VideosProps } from '../types/types';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from './Post/styles';
import { Dimensions, View } from 'react-native';

export const Home = () => {
  // const [data, setData] = useState<VideosProps[]>([]);

  // useEffect(() => {
  //   getVideos().then(res => {
  //     setData(res);
  //   });
  // }, []);

  const data = [
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/130252348_111030640846929_4598298936481937277_n.mp4',
      location: 'Ensenada, Baja California',
      like: true,
      likes: 369,
      username: 'adrielgro',
      description:
        'Grupo de amigos haciendo una aventura en bicicleta por las montañas. Se pueden ver impresionantes vistas panorámicas y el grupo disfrutando juntos mientras enfrentan desafíos en el camino.',
      comments: 576,
      shared: 78678,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/117429943_123937459408940_9134513281529443130_n.mp4',
      location: 'Ensenada, Baja California',
      like: false,
      likes: 369,
      username: 'azaelgro',
      description:
        'Tutorial de cocina que te enseña a preparar un delicioso plato de pasta casera. El chef da paso a paso instrucciones claras y utiliza ingredientes frescos y fáciles de encontrar.',
      comments: 576,
      shared: 6786,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/285104831_341132664821479_411172807789844196_n.mp4',
      location: 'Ensenada, Baja California',
      like: false,
      likes: 851,
      username: 'masterxd',
      description:
        'Grabación en vivo de un concierto de carros de rock. La banda tiene una gran energía y la multitud está bailando y cantando junto con las canciones.',
      comments: 576,
      shared: 87,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/10000000_5055309221262332_2720922733375213419_n.mp4',
      location: 'Ensenada, Baja California',
      like: true,
      likes: 35,
      username: 'hackerman',
      description:
        'Un documental sobre la vida de los animales en la selva tropical. Se pueden ver imágenes impresionantes de diferentes especies y se explica cómo interactúan en su hábitat natural.',
      comments: 69,
      shared: 45,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/273806733_363204805327610_8163281256008734313_n.mp4',
      location: 'Ensenada, Baja California',
      like: true,
      likes: 8637,
      username: 'caperusita',
      description:
        'Un documental sobre la vida de los animales en la selva tropical. Se pueden ver imágenes impresionantes de diferentes especies y se explica cómo interactúan en su hábitat natural.',
      comments: 786,
      shared: 6888,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/196556955_134131095373023_2234635310968401259_n.mp4',
      location: 'Ensenada, Baja California',
      like: true,
      likes: 78,
      username: 'yuki',
      description:
        'Un documental sobre la vida de los animales en la selva tropical. Se pueden ver imágenes impresionantes de diferentes especies y se explica cómo interactúan en su hábitat natural.',
      comments: 857,
      shared: 747,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/10000000_8446747015366946_5182072531562493065_n.mp4',
      location: 'Ensenada, Baja California',
      like: true,
      likes: 1651,
      username: 'panterita',
      description:
        'Un documental sobre la vida de los animales en la selva tropical. Se pueden ver imágenes impresionantes de diferentes especies y se explica cómo interactúan en su hábitat natural.',
      comments: 576,
      shared: 6881,
    },
    {
      url: 'https://baja.sfo3.digitaloceanspaces.com/320615147_708346530619327_6826175101981047518_n.mp4',
      location: 'Ensenada, Baja California',
      like: true,
      likes: 321,
      username: 'ensenadamx',
      description:
        'Un documental sobre la vida de los animales en la selva tropical. Se pueden ver imágenes impresionantes de diferentes especies y se explica cómo interactúan en su hábitat natural.',
      comments: 12,
      shared: 5888,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black',
        position: 'relative',
      }}>
      <SwiperFlatList
        vertical={true}
        onChangeIndex={handleChangeIndexValue}
        data={data}
        renderItem={({ item, index }) => (
          <Post item={item} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
