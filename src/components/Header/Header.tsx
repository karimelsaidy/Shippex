import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {I18nManager, Text, TextStyle, View, ViewStyle} from 'react-native';

import {Icon, IconProps} from '@/components';
import {InsetsHook} from '@/hooks';
import tw from '@/tw';

type Props = {
  back?: boolean;
  close?: boolean;
  StartComponent?: React.FC;
  title?: string;
  titleContainerStyle?: ViewStyle;
  CenterComponent?: React.FC;
  EndComponent?: React.FC;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  backIconStyle?: ViewStyle;
  backHandler?: () => void;
  backIconProps?: IconProps;
  backIconColor?: string;
  children?: React.ReactNode;
  showNotification?: boolean;
  showNotificationIndicator?: boolean;
  notificationOnPress?: () => void;
};

export const Header = ({
  back,
  title,
  StartComponent,
  CenterComponent,
  titleStyle,
  titleContainerStyle,
  EndComponent,
  containerStyle,
  backHandler,
  backIconStyle,
  backIconProps,
  close,
  backIconColor = tw.color('black'),
  children,
  showNotification,
  showNotificationIndicator,
  notificationOnPress = () => {},
}: Props) => {
  const navigation = useNavigation();

  const {top} = InsetsHook();

  // console.log(showIndicator);
  return (
    <View
      style={tw.style(
        `w-full flex-row pt-${top + 3} pb-3 items-center px-4`,
        containerStyle,
      )}>
      <View style={tw`flex-1 flex-row justify-between items-center`}>
        <View style={tw`flex-1`}>
          <View style={tw`flex-row`}>
            {!!back && (
              <Icon
                name="arrow-right"
                size={26}
                color={backIconColor}
                style={{
                  transform: [{scaleX: I18nManager.isRTL ? 1 : -1}],
                }}
                containerStyle={tw.style(`z-10`, backIconStyle)}
                onPress={() => {
                  backHandler ? backHandler() : navigation.goBack();
                }}
                {...backIconProps}
              />
            )}

            {!!close && (
              <Icon
                name="close-circle"
                size={20}
                color={tw.color('gray')}
                style={{
                  transform: [{scaleX: I18nManager.isRTL ? 1 : -1}],
                }}
                onPress={() => {
                  backHandler ? backHandler() : navigation.goBack();
                }}
                containerStyle={tw.style(`z-10`, backIconStyle)}
                {...backIconProps}
              />
            )}
            {!!StartComponent && <StartComponent />}
          </View>
        </View>

        <View
          style={tw.style(
            `items-center justify-center flex-2`,
            titleContainerStyle,
          )}>
          {!!title && (
            <Text
              style={tw.style(
                `h4-bold med text-black2 text-center`,
                titleStyle,
              )}>
              {title}
            </Text>
          )}
          {!!CenterComponent && <CenterComponent />}
        </View>
        <View style={tw`flex-1`}>
          <View style={tw`flex-row self-end`}>
            {!!showNotification && (
              <View>
                {showNotificationIndicator && (
                  <View
                    style={tw`h-3.5 w-3.5 rounded-circle bg-yellow -mb-3 ml-2 z-100`}
                  />
                )}
                <Icon
                  name="notifications-outline"
                  type="ionicon"
                  color={tw.color('secondary')}
                  style={tw` bg-primary2 rounded-full p-2 mx-2`}
                  onPress={notificationOnPress}
                />
              </View>
            )}
            {!!EndComponent && <EndComponent />}
          </View>
        </View>
      </View>
      {children}
    </View>
  );
};
