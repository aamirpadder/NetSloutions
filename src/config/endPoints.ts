import {APIKEY} from './config';

export const movieDiscover = (params: string) =>
  `discover/movie?api_key=${APIKEY}&${params}`;

export const moviePosterURl = (parmas: string) =>
  `https://image.tmdb.org/t/p/w500/${parmas}`;

export const movieReview = (movie_id: string, parmas: string) =>
  `movie/${movie_id}/reviews?api_key=${APIKEY}&${parmas}`;
