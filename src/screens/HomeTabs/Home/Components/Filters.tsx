import _ from 'lodash';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

import {shipmentStatusList} from '@/services/dummyData/userData';
import {ActionButton, BottomSheet, Icon} from '@/src/components';
import tw from '@/tw';
import {wp} from '@/utils';

type Props = {
  choosedStatus: string[];
  handleFilter: (arg0: string[]) => void;
};

const FilterIcon = () => (
  <Icon
    name="filter-outline"
    type="ionicon"
    color={tw.color('independence')}
    size={18}
    containerStyle={tw`mr-3`}
  />
);

export const Filters = ({handleFilter, choosedStatus}: Props) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [_choosedStatus, _setChoosedStatus] = useState<string[]>([]);

  const {t} = useTranslation();
  return (
    <View>
      <ActionButton
        label={t('buttons.filter')}
        onPress={() => setShowBottomSheet(prev => !prev)}
        RenderRight={FilterIcon}
        btnStyle={tw`bg-primary2 w-${wp(44)} items-center justify-center`}
        textStyle={tw`interReg text-4  text-independence`}
      />
      <BottomSheet
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}>
        <View>
          <View
            style={tw`flex-row justify-between items-center border-b border-gray3 pb-4`}>
            <Text
              style={tw`interMed text-4 text-secondary`}
              onPress={() => {
                _setChoosedStatus(choosedStatus);
                setShowBottomSheet(false);
              }}>
              {t('buttons.cancel')}
            </Text>
            <Text
              style={tw`text-black text-4.5 interSemiBold text-center mr-3`}>
              {t('buttons.filter')}
            </Text>
            <Text
              style={tw`interMed text-4 text-secondary`}
              onPress={() => {
                setShowBottomSheet(false);
                handleFilter(_choosedStatus);
              }}>
              {t('buttons.done')}
            </Text>
          </View>
          <View style={tw`flex-row flex-wrap mt-5 px-[4%]`}>
            {shipmentStatusList.map(item => (
              <ActionButton
                key={item.label}
                label={item.label}
                onPress={() =>
                  _setChoosedStatus(prev => _.xor(prev, [item.value]))
                }
                btnStyle={tw`bg-primary2 mr-2 mb-2 px-3 rounded-3 border-2 border-primary2 ${
                  _choosedStatus.includes(item.value)
                    ? ' border-secondary2'
                    : ''
                }`}
                textStyle={tw`text-independence ${
                  _choosedStatus.includes(item.value) ? 'text-secondary2' : ''
                }`}
              />
            ))}
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};
