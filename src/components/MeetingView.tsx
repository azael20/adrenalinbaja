import React from 'react';
import { Text, View } from 'react-native';
// @ts-ignore
import { useMeeting } from '@videosdk.live/react-native-sdk';
import { ControlsContainer } from '../subcomponents/ControlsContainer';
import { ParticipantList } from '../subcomponents/ParticipantList';

export const MeetingView = () => {
  // Get `participants` from useMeeting Hook
  const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
  const participantsArrId = [...participants.keys()]; // Add this line

  return (
    <View style={{ flex: 1 }}>
      <ControlsContainer
        join={join}
        leave={leave}
        toggleWebcam={toggleWebcam}
        toggleMic={toggleMic}
      />
      <ParticipantList participants={participantsArrId} />
    </View>
  );
};
