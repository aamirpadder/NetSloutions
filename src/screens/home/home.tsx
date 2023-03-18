import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyComponet} from '../../components/EmptyComponets';
import {ListItem} from '../../components/ListItem';
import {Loading} from '../../components/Loading';
import {networkmethods} from '../../config/axios';
import {movieDiscover, moviePosterURl} from '../../config/endPoints';
import type {RootState} from '../../Store';
import {setdata} from '../../store/slices/dataSlice';
import {colors} from '../../utils/constants';
import {loadMore} from '../../utils/utility';
import styles from './styles';

export const MoviesFeeds = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPages] = useState(1);
  const [data, setData] = useState([]);

  const [totalPages, setTotalpages] = useState(0);

  const {movieLikes} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setData([]);
    setPages(1);
    setTotalpages(0);

    fetchData().finally(() => {
      setRefreshing(false);
    });
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    return networkmethods
      .get(movieDiscover(`page=${page}`))
      .then(res => {
        console.log('res.data', res);
        const {page: resPage, total_pages, results} = res.data || {};
        // setTotalpages(page);
        // setPages(total_pages);
        // setData(results);
        loadMore(
          data,
          results,
          resPage,
          total_pages,
          setPages,
          setData,
          setTotalpages,
        );
        // dispatch(setdata(res.data.data));
      })
      .catch(err => {
        console.log('err', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}: {item: any}) => {
    const {title, poster_path, vote_average, id} = item || {};
    const {liked} = movieLikes.data.find(item => item.id === id) || {};
    return (
      <ListItem
        title={title}
        image={{uri: moviePosterURl(poster_path)}}
        vote_average={vote_average}
        onPress={() => {
          navigation.navigate('Details', {
            img: poster_path,
            title,
            id,
            vote_average,
          });
        }}
        liked={liked}
        onLike={() => {
          dispatch(setdata({id, value: !liked}));
        }}
      />
    );
  };
  const onEndReached = () => {
    fetchData();
  };
  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <FlatList
        testID="MovieFlatList"
        accessibilityLabel="MovieFlatList"
        ListEmptyComponent={isLoading ? null : <EmptyComponet />}
        data={data}
        refreshing={refreshing}
        refreshControl={
          <RefreshControl
            tintColor={colors.WHITE_COLOR}
            progressBackgroundColor={colors.WHITE_COLOR}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        initialNumToRender={9}
        renderItem={renderItem}
        keyExtractor={item => `${item?.id}`}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
};
