import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {colors} from '../utils/constants';

type Props = {
  isLoading: boolean;
};
export const Loading = (props: Props) => {
  const {isLoading} = props || {};
  return isLoading ? (
    <View style={style.cotainer}>
      <ActivityIndicator size={'small'} color={colors.APP_COLOR} />
    </View>
  ) : null;
};

const style = StyleSheet.create({
  cotainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
  },
});
