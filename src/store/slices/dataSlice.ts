import {createSlice} from '@reduxjs/toolkit';
import {setLikesData, setLocalData} from '../../utils/utility';

export type Data = {
  id: string;
  liked: boolean;
};

export type commentsData = {
  id: string;
  comment: string;
};

type List = {
  data: Array<Data> | [];
  commetsData: Array<commentsData>;
};

const initialState: List = {
  data: [],
  commetsData: [],
};

export const movieLikes = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setdata: (state, action) => {
      const {id, value} = action.payload || {};
      state.data = setLocalData(id, state.data, value, 'liked');
    },

    setComments: (state, action) => {
      const {id, value} = action.payload || {};
      console.log('id, value',id, value);
      state.commetsData = setLocalData(id, state.commetsData, value, 'comment');
    },
  },
});

export const {setdata, setComments} = movieLikes.actions;
export default movieLikes.reducer;
