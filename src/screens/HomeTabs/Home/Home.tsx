import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Text, View} from 'react-native';

import {Header, ShipmentCard} from '@/components';
import tw from '@/tw';

import {useHomeHooks} from '../hooks';

export const Home = () => {
  const {t} = useTranslation();
  const {loading, getShipmentList, shipmentListData} = useHomeHooks();

  useFocusEffect(
    React.useCallback(() => {
      getShipmentList();
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <View style={tw`flex-1`}>
      <Header showNotification />
      <View style={tw`flex-1 px-[2%]`}>
        <FlatList
          style={tw`flex-1`}
          contentContainerStyle={tw`flex-grow pb-[5%]`}
          data={shipmentListData}
          keyExtractor={item => item?._id}
          renderItem={({item}) => <ShipmentCard {...item} />}
          ItemSeparatorComponent={() => <View style={tw`h-3`} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
