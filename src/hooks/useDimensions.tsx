import { Dimensions } from 'react-native';

export const useDimensions = () => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  return {
    height,
    width,
  };
};

export default useDimensions;
