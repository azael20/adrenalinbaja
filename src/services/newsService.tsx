import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import {
  activityFinished,
  activityStarted,
  setError,
} from '../redux/actions/activityActions';

const useNewsService = () => {
  const dispatch = useDispatch();
  const newsService = () => {
    dispatch(activityStarted(true));
    const news = firestore().collection('news').get();
    return news
      .then((res: any) => {
        dispatch(activityFinished(false));
        return res._docs;
      })
      .catch(err => {
        dispatch(activityFinished(false));
        dispatch(setError(err));
        console.log(err);
      });
  };

  // const exampleService = () => {
  //   return fetch('http://localhost:3000/users/', {
  //     method: 'GET',
  //   })
  //     .then((res: any) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return {
    newsService,
    // exampleService,
  };
};

export default useNewsService;
