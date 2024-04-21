import React from 'react';
import {FlatList, View} from 'react-native';

import {LoadingComp, ShipmentCard} from '@/components';
import tw from '@/tw';

type Props = {
  shipmentListData: [];
  markAll: boolean;
  loading: boolean;
};

export const ShipmentList = ({shipmentListData, markAll, loading}: Props) => {
  return (
    <View style={tw`flex-1`}>
      <FlatList
        style={tw`flex-1`}
        contentContainerStyle={tw`flex-grow pb-[5%]`}
        data={shipmentListData}
        keyExtractor={item => item?._id}
        renderItem={({item}) => (
          <ShipmentCard {...item} markAllChecked={markAll} />
        )}
        ItemSeparatorComponent={() => <View style={tw`h-3`} />}
        showsHorizontalScrollIndicator={false}
      />
      {!!loading && <LoadingComp containerStyle={tw`w-full h-full`} />}
    </View>
  );
};
