import axios from 'axios';
import {BaseURl} from './config';

export const client = axios.create({
  baseURL: BaseURl,
});

export const networkmethods = {
  get: (url: string, params?: any) => client.get(url, params),
};
