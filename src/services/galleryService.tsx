import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { activityFinished, activityStarted, setError } from '../redux/actions/activityActions';

const useGalleryService = () => {
  const dispatch = useDispatch();

  const galleryService = () => {
    dispatch(activityStarted(true));
    const gallery = firestore().collection('gallery').get();
    return gallery
      .then((res: any) => {
        dispatch(activityFinished(false));
        return res._docs;
      })
      .catch(err => {
        dispatch(activityFinished(false));
        dispatch(setError(err));
      });
  };
  return {
    galleryService,
  };
};

export default useGalleryService;
