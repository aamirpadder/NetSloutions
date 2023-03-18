/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputComponent,
  TextInputProps,
} from 'react-native';
import {Controller} from 'react-hook-form';
import IconFeather from 'react-native-vector-icons/Feather';
import {colors} from '../utils/constants';
import { perfectSize } from '../utils/utility';
interface Params {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  control: any;
  rules?: Object;
  keyboardType?: string;
  maxLength?: number;
  borderNeeded?: boolean;
  autoCorrect?: boolean;
  editable?: boolean;
  reference?: object;
  isLastInput?: boolean;
  callBack?: Function;
  textStyle?: Object;
  onPress?: () => void;
  inputProps?: TextInputProps;
}

const CustomInput: FC<Params> = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry = undefined,
  borderNeeded,
  reference,
  isLastInput,
  callBack,
  textStyle,
  onPress,
  inputProps,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              borderNeeded
                ? {borderColor: error ? 'red' : '#000000', borderWidth: 0.2}
                : {},
            ]}>
            <TextInput
              //   ref={reference}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={'black'}
              style={[
                textStyle ? textStyle : styles.input,
                secureTextEntry !== undefined && {width: '90%'},
              ]}
              returnKeyType={isLastInput ? 'done' : 'next'}
              //   onSubmitEditing={() => {
              //     !isLastInput ? callBack(true) : callBack(false);
              //   }}
              {...inputProps}
            />
            {secureTextEntry !== undefined && (
              <IconFeather
                onPress={onPress}
                size={20}
                color={colors.APP_COLOR}
                name={secureTextEntry ? 'eye-off' : 'eye'}
              />
            )}
          </View>
          {error && (
            <Text style={{color: colors.Error, alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 6,
    paddingHorizontal: perfectSize(10),
    marginVertical: perfectSize(5),
  },
  input: {
    width: '100%',
    height: perfectSize(50),
    color: 'black',
  },
});

export default CustomInput;
