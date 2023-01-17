import { VideosProps } from '../types/types';

export const getVideos = () => {
  return fetch('http://baja.wikuber.com/api/videos.json', {
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
      return;
    });
};
