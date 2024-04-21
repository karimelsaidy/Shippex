import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Image, Text, View} from 'react-native';

import {Images} from '@/assets';
import SvgLogo from '@/assets/SvgComponents/SvgLogo';
import {CheckBox, Header, ShipmentCard} from '@/components';
import tw from '@/tw';

import {useHomeHooks} from '../hooks';
import {Filters, Scan, SearchComponent} from './Components';

export const Home = () => {
  const [markAll, setMarkAll] = useState(false);
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
      <Header
        showNotification
        StartComponent={() => (
          <Image
            source={Images.avatar}
            style={tw`rounded-full h-10 w-10`}
            resizeMode="contain"
          />
        )}
        CenterComponent={() => <SvgLogo />}
      />
      <View style={tw`flex-1 px-[3%] mt-3`}>
        <Text style={tw`interReg text-black opacity-60`}>
          {t('home.hello')}
        </Text>
        <Text style={tw`text-black sfProSemibold text-7 mt-.5`} />
        <SearchComponent
          handleSearch={(word: string) => {
            console.log('SearchComponent', word);
          }}
        />
        <View style={tw`flex-row justify-between my-5`}>
          <Filters />
          <Scan />
        </View>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-black text-5.5 sfProSemibold `}>
            {t('home.shipments')}
          </Text>

          <View style={tw`items-center justify-center flex-row`}>
            <CheckBox
              value={markAll}
              onChange={() => setMarkAll(prev => !prev)}
            />
            <Text style={tw`text-4.5 sfProRegular text-secondary -ml-2`}>
              {t('buttons.markAll')}
            </Text>
          </View>
        </View>
        <View style={tw`flex-1 `}>
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
        </View>
      </View>
    </View>
  );
};
