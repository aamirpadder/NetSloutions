import React from 'react';
import {View, Text} from 'react-native';
import {moviePosterURl} from '../config/endPoints';
import {buildStylesheet} from '../utils/styles';
import {Avatar} from './Avatar';

type Props = {
  image: string;
  name: string;
  comment: string;
  styles?: Object;
  more?: boolean;
  showMore: (id: string) => void;
  id: string;
};

export const CommetItem = (props: Props) => {
  const {image, name = '', comment = '', more, showMore, id} = props;
  const styles = buildStylesheet('commentItem', props.styles || {});
  return (
    <View style={styles.container}>
      <Avatar name={name} source={moviePosterURl(image)} size={25} noShadow />
      <View style={styles.commentText}>
        {/* <Text> */}
        <Text style={styles.commentAuthor}>{name} </Text>
        <Text style={styles.commentContent}>
          {more ? comment : comment.slice(0, 150)}
          <Text
            onPress={() => {
              showMore(id);
            }}
            style={[styles.commentContent, {color: '#0000FF'}]}>
            {' '}
            {more ? 'Less' : 'More'}{' '}
          </Text>
        </Text>
        {/* </Text> */}
      </View>
      {/* {smartRender(this.props.Footer)} */}
    </View>
  );
};
