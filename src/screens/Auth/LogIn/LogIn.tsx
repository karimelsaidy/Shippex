import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Toast, {ToastConfig} from 'react-native-toast-message';

import {KeyboardTranslation} from '@/assets';
import {Button, Header, TextInput} from '@/components';
import {toastConfig} from '@/config';
import tw from '@/tw';
import {loginValidation} from '@/validation';

import {CancelButton, PasswordEye} from './Components';

type loginForm = {
  userName: string;
  password: string;
};
export const LogIn = () => {
  const {t} = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const {translateStyle} = KeyboardTranslation({keyboardFactor: 5});

  const _onSubmit = () => {};

  const {
    control,
    formState: {errors},
    handleSubmit,
    formState: {isSubmitted},
    getFieldState,
  } = useForm<loginForm>({
    defaultValues: {
      url: '',
      userName: '',
      password: '',
    },
    resolver: yupResolver<loginForm>(loginValidation()),
    mode: 'onChange',
  });

  return (
    <View style={tw`flex-1`}>
      <View
        style={tw`w-[9%] h-[.6%] self-center rounded-full mt-1 mb-2 bg-gray2`}
      />
      <Header
        StartComponent={CancelButton}
        containerStyle={tw`p-0 pt-1 pl-1`}
      />
      <ScrollView contentContainerStyle={tw`px-[5%] pb-[15%] flex-grow`}>
        <Animated.View style={[tw`flex-grow justify-between`, translateStyle]}>
          <View>
            <Text style={tw`mt-5 mb-3 sfProBold text-black text-8.5`}>
              {t('auth.login')}
            </Text>
            <View style={tw`w-[87.7%]`}>
              <Text style={tw`sfProRegular text-4.25 text-gray`}>
                {t('auth.loginSub')}
              </Text>
            </View>
            <Controller
              control={control}
              name="url"
              render={({
                field: {onChange, onBlur, value, ref},
                fieldState: {isDirty},
              }) => (
                <TextInput
                  label={t('auth.url')}
                  containerStyle={tw`mt-[10%]`}
                  value={value}
                  onChangeText={onChange}
                  placeholder={t('auth.url')}
                  error={isSubmitted && !!errors.url?.message}
                  errorMsg={
                    isSubmitted && errors.url?.message && t(errors.url?.message)
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="userName"
              render={({
                field: {onChange, onBlur, value, ref},
                fieldState: {isDirty},
              }) => (
                <TextInput
                  label={t('auth.userName')}
                  containerStyle={tw`mt-[5%]`}
                  value={value}
                  onChangeText={onChange}
                  placeholder={t('auth.userName')}
                  error={isSubmitted && !!errors.userName?.message}
                  errorMsg={
                    isSubmitted &&
                    errors.userName?.message &&
                    t(errors.userName?.message)
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({
                field: {onChange, onBlur, value, ref},
                fieldState: {isDirty},
              }) => (
                <TextInput
                  label={t('auth.password')}
                  containerStyle={tw`mt-[5%]`}
                  secureTextEntry={showPassword}
                  RenderLeft={() =>
                    PasswordEye(showPassword, () =>
                      setShowPassword(prev => !prev),
                    )
                  }
                  value={value}
                  onChangeText={onChange}
                  placeholder={t('auth.password')}
                  error={isSubmitted && !!errors.password?.message}
                  errorMsg={
                    isSubmitted &&
                    errors.password?.message &&
                    t(errors.password?.message)
                  }
                />
              )}
            />
          </View>
          <View>
            <Button
              label={t('buttons.login')}
              variant="secondary"
              outLineTextStyle="secondary"
              onPress={handleSubmit(_onSubmit)}
            />
          </View>
        </Animated.View>
      </ScrollView>
      <Toast
        config={toastConfig as ToastConfig}
        visibilityTime={5000}
        topOffset={55}
      />
    </View>
  );
};
