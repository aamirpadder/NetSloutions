import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import {moviePosterURl, movieReview} from '../../config/endPoints';
import {networkmethods} from '../../config/axios';
import {CommetItem} from '../../components/Comments';
import {EmptyComponet} from '../../components/EmptyComponets';
import SectionHeader from '../../components/SectionHeader';
import {Avatar} from '../../components/Avatar';
import {colors} from '../../utils/constants';
import styles from './styles';
import {setComments, setdata} from '../../store/slices/dataSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {CommentBox} from '../../components/CommentBox';
import {loadMore} from '../../utils/utility';

type Params = {
  title: string;
  onLike: () => void;
  id: string;
  img: string;
  vote_average: string;
  totalvote: number;
};

const MovieDetails = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const {width} = useWindowDimensions();

  const {movieLikes} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const {title, img, id, onLike, vote_average, totalvote}: Params =
    route.params;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPages] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalpages] = useState(0);
  const [totalResults, setTotalresults] = useState(0);
  const [moreId, setMoreId] = useState('');

  const fetchData = () => {
    setIsLoading(true);
    networkmethods
      .get(movieReview(id, `page=${page}`))
      .then(res => {
        console.log('res.data', res);
        const {
          page: resPage,
          total_pages,
          results,
          total_results,
        } = res.data || {};
        setTotalresults(total_results);
        loadMore(
          data,
          results,
          resPage,
          total_pages,
          setPages,
          setData,
          setTotalpages,
        );
      })
      .catch(err => {
        console.log('err', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    navigation.setOptions({title});
    fetchData();
  }, []);

  const showMore = id => {
    if (moreId === id) {
      setMoreId('');
    } else {
      setMoreId(id);
    }
  };

  const renderItem = ({item}) => {
    const {author_details, content, id} = item || {};
    const {avatar_path, username} = author_details || {};
    return (
      <CommetItem
        more={moreId === id}
        id={id}
        showMore={showMore}
        name={username}
        image={avatar_path}
        comment={content}
      />
    );
  };

  const {liked} = movieLikes.data.find(item => item.id === id) || {};
  const {comment = ''} =
    movieLikes.commetsData?.find(item => item.id === id) || {};

  const myCommentCount = comment ? 1 : 0;
  const totalComments = totalResults
    ? totalResults + myCommentCount
    : 0 + myCommentCount;

  const likedValue = liked ? 1 : 0;
  const voteCount = totalvote ? totalvote + likedValue : likedValue;

  return (
    <View style={{flex: 1}}>
      <Image
        style={{width, height: width - 200, backgroundColor: '#000000'}}
        resizeMode="contain"
        source={{uri: moviePosterURl(img)}}
      />
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            dispatch(setdata({id, value: !liked}));
          }}>
          <Avatar
            noShadow
            notRound
            source={
              liked
                ? require('../../assets/icons/heart-red.png')
                : require('../../assets/icons/heart.png')
            }
            size={32}
          />
          <Text style={{color: colors.APP_COLOR}}>{voteCount} Likes</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar
            noShadow={true}
            source={require('../../assets/icons/star.png')}
            size={20}
          />
          <Text style={{color: colors.APP_COLOR}}> {vote_average}</Text>
        </View>
      </View>
      <SectionHeader title={`(${totalComments}) Comments`} />
      <FlatList
        ListHeaderComponent={
          <CommentBox
            source={require('../../assets/icons/user.png')}
            value={comment}
            noAvatar={!false}
            onChangeText={text => {
              dispatch(setComments({id, value: text}));
            }}
            textInputProps={{multiline: true, defaultValue: comment}}
          />
        }
        data={data}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd > 0) {
            // Alert.alert('jjjj')
            fetchData();
          }
        }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={isLoading || comment? null : <EmptyComponet />}
        renderItem={renderItem}
        keyExtractor={item => item?.id?.toString()}
      />
    </View>
  );
};

export default MovieDetails;
