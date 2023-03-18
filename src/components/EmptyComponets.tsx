import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {perfectSize} from '../utils/utility';

type Props = {
  title?: boolean;
};
export const EmptyComponet = (props: Props) => {
  const {title = 'No data found'} = props || {};
  return (
    <View style={style.cotainer}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  cotainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: perfectSize(12),
  },
});
