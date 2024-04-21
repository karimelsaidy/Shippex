import _ from 'lodash';
import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {ViewStyle} from 'react-native';

import {Icon, TextInput} from '@/src/components';
import tw from '@/tw';

type Props = {
  handleSearch: (arg0: string) => void;
  containerStyle?: ViewStyle;
};

const SearchIcon = () => (
  <Icon
    name="search1"
    type="ant-design"
    containerStyle={tw` self-center ml-4`}
    size={20}
    color={tw.color('gray2')}
  />
);

export const SearchComponent = ({handleSearch, containerStyle}: Props) => {
  const {t} = useTranslation();
  const deponceSearch = useRef(_.debounce(handleSearch, 300));

  return (
    <TextInput
      RenderRight={SearchIcon}
      onChangeText={deponceSearch.current}
      containerStyle={tw.style(`items-center h-12`, containerStyle)}
      placeholder={t('home.searching')}
    />
  );
};
