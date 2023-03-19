import {Dimensions} from 'react-native';
import {create} from 'react-native-pixel-perfect';
import {commentsData, Data} from '../store/slices/dataSlice';

const {width, height} = Dimensions.get('window');
const designResolution = {
  width,
  height,
};

export const perfectSize = create(designResolution);

export const setLocalData = (
  id: string,
  data: Array<Data | commentsData>,
  value: boolean | string,
  fildType: string,
) => {
  const copyData = data ?? [];
  const filterData: any = [...copyData];

  const indexOfItem = filterData.findIndex(
    (item: {id: string}) => item?.id === id,
  );

  if (indexOfItem > -1) {
    filterData[indexOfItem][fildType] = value;
  } else {
    filterData.push({
      id,
      [fildType]: value,
    });
  }

  return filterData;
};

export const loadMore = (
  data: Array<any>,
  responseData: Array<any>,
  pages: number,
  totalPage: number,
  setPage: Function,
  setData: Function,
  setTotalPage: Function,
) => {
  if (pages <= totalPage && responseData?.length && data?.length) {
    const removeDeuplicate = [...data, ...responseData].filter(
      (item, index, arr) => arr.indexOf(item) === index,
    );
    setData(removeDeuplicate);
    setPage(pages + 1);
    setTotalPage(totalPage);
  } else {
    if (responseData?.length) {
      setData(responseData);
      setPage(pages + 1);
      setTotalPage(totalPage);
    }
  }
};
