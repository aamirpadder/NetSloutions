import React from 'react';
import {View, Image, Text} from 'react-native';
import {buildStylesheet} from '../utils/styles';

type Props = {
  source: string;
  size: number;
  noShadow?: boolean;
  notRound?: boolean;
  name?: string;
  styles?: Object;
};

export const Avatar = (props: Props) => {
  const {source, size = 200, noShadow, notRound, name = '',} = props;
  const styles = buildStylesheet('avatar', props.styles || {});
  const borderRadius = notRound ? undefined : size / 2;
 let imgUrl:any = source;
  if(typeof imgUrl ==='string'){
    imgUrl = {uri:source}
  }
  return (
    <View
      style={[
        styles.container,
        noShadow ? styles.noShadow : null,
        {
          width: size,
          height: size,
        },
      ]}>
      {source ? (
        <Image
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius,
            },
          ]}
          //@ts-ignore
          source={imgUrl}
          defaultSource={require('../assets/icons/user.png')}
          resizeMethod="resize"
        />
      ) : (
        <Text style={styles.commentAuthor}>{name[0]} </Text>
      )}
    </View>
  );
};
