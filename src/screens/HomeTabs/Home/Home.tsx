import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import SvgLogo from '@/assets/SvgComponents/SvgLogo';
import {CheckBox, Header, LoadingComp} from '@/components';
import {appLang} from '@/src/utils';
import tw from '@/tw';

import {useHomeHooks} from '../hooks';
import {Filters, Scan, SearchComponent, ShipmentList} from './Components';

export const Home = () => {
  const [markAll, setMarkAll] = useState(false);
  const {t} = useTranslation();
  const {loading, getShipmentList, shipmentListData, userData} = useHomeHooks();
  const choosedStatus = useRef<string[]>([]);
  const searchWord = useRef('');

  useFocusEffect(
    React.useCallback(() => {
      getShipmentList();
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <TouchableWithoutFeedback style={tw`flex-1`} onPress={Keyboard.dismiss}>
      <>
        <Header
          showNotification
          StartComponent={() => (
            <Image
              source={userData?.personalInfo?.avatar}
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
          <Text style={tw`text-black sfProSemibold text-7 mt-.5 mb-3`}>
            {userData?.personalInfo?.firstName[appLang]}
          </Text>
          <SearchComponent
            handleSearch={(word: string) => {
              searchWord.current = word;
              getShipmentList({status: choosedStatus.current, word});
              console.log('SearchComponent', word);
            }}
          />
          <View style={tw`flex-row justify-between my-5`}>
            <Filters
              choosedStatus={choosedStatus.current}
              handleFilter={(arg0: string[]) => {
                choosedStatus.current = arg0;
                getShipmentList({status: arg0, word: searchWord.current});
              }}
            />
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
          <View style={tw`flex-1`}>
            <React.Suspense fallback={<LoadingComp />}>
              <ShipmentList
                markAll={markAll}
                shipmentListData={shipmentListData}
                loading={loading}
              />
            </React.Suspense>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};
