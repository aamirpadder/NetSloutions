import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {buildStylesheet} from '../utils/styles';
import {Avatar} from './Avatar';

type Props = {
  styles?: Object;
  noAvatar?: boolean;
  source?: string;
  value: string;
  onChangeText: (text: string) => void;
  textInputProps?: TextInputProps;
};

export const CommentBox = (props: Props) => {
  const {noAvatar, source, value, onChangeText, textInputProps} = props;

  const styles = buildStylesheet('commentBox', props.styles);

  const input = (
    <View style={styles.container}>
      {noAvatar && (
        <Avatar noShadow size={35} styles={styles.avatar} source={source} />
      )}
      <TextInput
        // value={value}
        style={styles.textInput}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        // onSubmitEditing={(event) => {
        //   this.setState({ text: '' });
        //   this.postComment(event);
        // }}
        placeholder={'Start Typing...'}
        returnKeyType="send"
        {...textInputProps}
      />
    </View>
  );
  return input;
};
