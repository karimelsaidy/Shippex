import React from 'react';
import {Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

import {Icon} from '@/components';
import tw from '@/tw';
/*
  1. Create the config
*/
const hideToast = () => {
  Toast.hide();
};
export const toastConfig = {
  ErrorInfo: ({text1}: {text1: string}) => (
    <View
      style={tw`bg-red2 px-2 items-center flex-row py-3 my-1 rounded-1.5 w-[82%] justify-between z-999999999`}>
      <View style={tw`flex-row items-center max-w-[95%]`}>
        <Icon
          size={24}
          name="information-circle-outline"
          type="ionicon"
          color={tw.color('red')}
        />
        <Text style={tw`text-left pa-reg text-4 px-2 max-w-[95%]`}>
          {text1}
        </Text>
      </View>

      <Icon
        size={17}
        type="ionicon"
        name="close-sharp"
        color={tw.color('gray')}
        onPress={hideToast}
      />
    </View>
  ),
  SuccessInfo: ({text1}: {text1: string}) => {
    return (
      <View
        style={tw`bg-primary px-2 items-center flex-row py-3 my-1 rounded-rounded justify-between shadow-lg w-[86%]`}>
        <View style={tw`flex-row items-center bg-primary  py-2 max-w-[92%]`}>
          <View style={tw`bg-green rounded-circle`}>
            <Icon
              size={24}
              name="checkmark-circle-outline"
              type="ionicon"
              color={tw.color('primary')}
            />
          </View>
          <Text style={tw`text-left pa-bold text-4 px-2 max-w-[96%]`}>
            {text1}
          </Text>
        </View>
        <View style={tw`bg-gray p-1 rounded-circle`}>
          <Icon
            size={17}
            type="ionicon"
            name="close-sharp"
            color={tw.color('gray')}
            onPress={hideToast}
          />
        </View>
      </View>
    );
  },
  DisplayInfo: ({text1}: {text1: string}) => (
    <View
      style={tw`bg-yellow3 px-2 items-center flex-row py-3 my-1 rounded-1.5 w-[82%] justify-between`}>
      <View style={tw`flex-row items-center max-w-[95%]`}>
        <Icon
          size={22}
          type="ionicon"
          name="information-circle-outline"
          color={tw.color('black')}
        />
        <Text style={tw`text-left pa-reg text-4 px-2 max-w-[95%]`}>
          {text1}
        </Text>
      </View>

      <Icon
        size={17}
        type="ionicon"
        name="close-sharp"
        color={tw.color('gray')}
        onPress={hideToast}
      />
    </View>
  ),
};
