import axios from 'axios';

export const API_KEY = '1d46d55539e318d9c7df6b911b8daaba';
export const API_URL = 'https://api.themoviedb.org/3/movie/';

//nowPlayingList api
export const getNowPlayingList = async () => {
  const response = await axios.get(`${API_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

//popularList api
export const getPopularList = async () => {
  const response = await axios.get(`${API_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

//topRatedList api
export const getTopRatedList = async () => {
  const response = await axios.get(`${API_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

//upComingList api
export const getUpComingList = async () => {
  const response = await axios.get(`${API_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};
