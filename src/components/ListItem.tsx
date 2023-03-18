import React from 'react';
import {
  StyleSheet,
  ImageURISource,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import {colors} from '../utils/constants';
import {perfectSize} from '../utils/utility';

const {width} = Dimensions.get('window');

type Props = {
  title: string;
  image: ImageURISource;
  onPress: () => void;
  isLocation?: boolean;
  vote_average: string;
  onLike: () => void;
  liked: boolean;
  totalvote: number;
};

export const ListItem = (props: Props) => {
  const {title, onPress, image, vote_average, onLike, liked,totalvote } = props || {};
  return (
    // <Card>
    <View style={style.container}>
      <Pressable onPress={onPress} style={style.containerImg}>
        <Image resizeMode="cover" style={style.containerImg} source={image} />
      </Pressable>
      <View style={style.tilteView}>
        <Text numberOfLines={2} style={style.title}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={style.iconView}>
            <Pressable onPress={onLike}>
              <Image
                resizeMode="cover"
                style={style.iocnImage}
                source={
                  liked
                    ? require('../assets/icons/heart-red.png')
                    : require('../assets/icons/heart.png')
                }
              />
              <Text>{totalvote} Likes</Text>
            </Pressable>
            <Pressable onPress={onPress}>
              <Image
                resizeMode="cover"
                style={[style.iocnImage, {marginHorizontal: 10}]}
                source={require('../assets/icons/comment.png')}
              />
            </Pressable>

            {/* <Image
              resizeMode="cover"
              style={[style.iocnImage,{tintColor:'#ccc'}]}
              source={require('../assets/icons/send.png')}
            /> */}
          </View>
          <View style={style.iconView}>
            <Image
              resizeMode="cover"
              style={style.star}
              source={require('../assets/icons/star.png')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: colors.blackLight,
              }}>
              {' '}
              {vote_average}
            </Text>
          </View>
        </View>
      </View>
    </View>
    // </Card>
  );
};

const style = StyleSheet.create({
  container: {
    // width:'50%',
    marginTop: 10,
    borderRadius: 5,
    // backgroundColor: colors.WHITE_COLOR,
    backgroundColor: colors.blackLight,
    justifyContent: 'space-between',
  },
  iocnImage: {
    width: 25,
    height: 25,
  },
  star: {
    width: 15,
    height: 15,
  },
  iconView: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  containerImg: {
    // width: perfectSize(width),
    // height: perfectSize(width),
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
    backgroundColor: 'rgba(0,0,0,0.4)',
    // borderRadius: perfectSize(5),
  },
  title: {
    fontSize: perfectSize(15),
    color: colors.blackLight,
    fontWeight: '600',
  },
  tilteView: {
    // flexWrap: 'wrap',
    marginBottom: 10,
    // height: perfectSize(70),
    // backgroundColor: colors.blackLight,
    backgroundColor: colors.WHITE_COLOR,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    // borderRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
