import { useDispatch } from 'react-redux';
import {
  activityFinished,
  activityStarted,
  setError,
} from '../redux/actions/activityActions';

export const useLiveStreamService = () => {
  // API call to create meeting
  const dispatch = useDispatch();

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyOGY0MjUyYi04ZmQ1LTQ5YTYtODY2YS00ZDExZWVlNzgxMGMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3MzUwNTM3MCwiZXhwIjoxNjc0MTEwMTcwfQ.D4E35jHiip5x-o-0IZ6_ger4X_g3Ez-y9obm-wirgDE';

  const createMeeting = async (t: string) => {
    dispatch(activityStarted(true));
    return await fetch('https://api.videosdk.live/v1/meetings', {
      method: 'POST',
      headers: {
        authorization: `${t}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(activityFinished(false));
        // console.log(json);
        return json;
      })
      .catch(err => {
        dispatch(activityFinished(false));
        dispatch(setError(err));
        console.log(err);
      });
  };

  return {
    createMeeting,
    token,
  };
};
