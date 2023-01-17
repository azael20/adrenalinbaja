import React from 'react';
import { Text, View } from 'react-native';
import {
  useParticipant,
  MediaStream,
  RTCView,
} from '@videosdk.live/react-native-sdk';

export const ParticipantView = ({ participantId }) => {
  const { webcamStream, webcamOn } = useParticipant(participantId);
  console.log('webcam on: ', webcamOn);
  return webcamOn ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={'cover'}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: 'grey',
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
    </View>
  );
};
