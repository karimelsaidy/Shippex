import React, {useState, useTransition} from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, Image, Pressable, Text, View} from 'react-native';
import Animated, {StretchOutY, StretchInY} from 'react-native-reanimated';

import {ActionButton, CheckBox, DashLine, Icon, Tag} from '@/components';
import {Icons} from '@/src/assets';
import tw from '@/tw';

type Props = {
  label: string;
  cardReference: string;
  status: 'received' | 'error' | 'delivered' | 'canceled' | 'onHold';
  address: {
    from: {city: string; details: string};
    to: {city: string; details: string};
  };
  phoneNumber: string;
  isChecked?: boolean;
  onChangeCheckCard?: (arg0: boolean) => void;
};

const WhatsAppIcon = () => (
  <Icon
    name="logo-whatsapp"
    type="ionicon"
    size={20}
    color={tw.color('primary')}
    containerStyle={tw`mr-1`}
  />
);

const CallIcon = () => (
  <Icon
    name="call"
    type="ionicon"
    size={20}
    color={tw.color('primary')}
    containerStyle={tw`mr-1`}
  />
);

export const ShipmentCard = ({
  label,
  cardReference,
  address,
  phoneNumber,
  status,
  isChecked = false,
  onChangeCheckCard = () => {},
}: Props) => {
  const [expand, setExpand] = useState(false);
  const [cardChicked, setCardChecked] = useState(isChecked);

  const {t} = useTranslation();

  return (
    <View
      style={tw`w-full rounded-2.5 overflow-hidden border-2  ${
        cardChicked ? 'border-secondary4' : 'border-primary2'
      }`}>
      <View
        style={tw`bg-primary2 p-3 w-full flex-row justify-between items-center`}>
        <View style={tw`flex-row`}>
          <CheckBox
            value={cardChicked}
            onChange={() => {
              setCardChecked(prev => !prev);
              onChangeCheckCard(!cardChicked);
            }}
          />
          <Image
            source={Icons.box}
            style={tw`h-10 w-10`}
            resizeMode="contain"
          />
        </View>

        <View>
          <Text style={tw`text-black2 interReg text-3.25`}>{label}</Text>
          <Text style={tw`text-black interSemiBold`}>{cardReference}</Text>
          <Text style={tw`interReg text-gray`}>
            {address?.from?.city}
            <Icon
              containerStyle={tw`mx-1`}
              name={I18nManager.isRTL ? 'arrowleft' : 'arrowright'}
              type="ant-design"
              size={12}
              color={tw.color('secondary')}
            />
            {address?.to?.city}
          </Text>
        </View>
        <Tag
          type={status}
          containerStyle={tw`rounded-2 border border-primary`}
        />
        <Pressable
          style={tw`p-1 rounded-full ${expand ? 'bg-secondary6' : ''}`}
          onPress={() => setExpand(prev => !prev)}>
          <Icon
            name="expand"
            type="font-awesome"
            size={17}
            color={expand ? tw.color('primary') : tw.color('secondary2')}
            containerStyle={tw`rounded-full ${
              expand ? 'bg-secondary4' : 'bg-primary'
            } p-2.5`}
          />
        </Pressable>
      </View>
      {expand && (
        <Animated.View
          style={tw`  py-2 border-b-0  bg-primary2 rounded-b-2.5`}
          entering={StretchInY}
          exiting={StretchOutY}>
          <DashLine />
          <View style={tw`px-3 flex-row justify-between items-center`}>
            <View style={tw``}>
              <Text style={tw`interReg text-secondary text-2.75`}>
                {t('home.origin')}
              </Text>
              <Text style={tw`interReg text-black text-4 my-.5`}>
                {address?.from?.city}
              </Text>
              <Text style={tw`text-independence interReg text-3`}>
                {address?.from?.details}
              </Text>
            </View>
            <Icon
              containerStyle={tw`mx-1`}
              name={I18nManager.isRTL ? 'arrowleft' : 'arrowright'}
              type="ant-design"
              size={26}
              color={tw.color('secondary')}
            />
            <View style={tw``}>
              <Text style={tw`interReg text-secondary text-2.75`}>
                {t('home.destination')}
              </Text>
              <Text style={tw`interReg text-black text-4 my-.5`}>
                {address?.to?.city}
              </Text>
              <Text style={tw`text-independence interReg text-3`}>
                {address?.to?.details}
              </Text>
            </View>
          </View>
          <View style={tw`justify-end flex-row mt-4`}>
            <ActionButton
              label={t('buttons.call')}
              RenderRight={CallIcon}
              btnStyle={tw`bg-secondary4 py-1.5 px-4 items-center mx-2`}
              onPress={() => {}}
            />
            <ActionButton
              label={t('buttons.whatsApp')}
              RenderRight={WhatsAppIcon}
              btnStyle={tw`bg-green3 py-1.5 px-4 items-center`}
              onPress={() => {}}
            />
          </View>
        </Animated.View>
      )}
    </View>
  );
};
