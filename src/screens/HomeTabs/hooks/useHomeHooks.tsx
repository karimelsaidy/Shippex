import React, {useState} from 'react';

import {getShimentListService, getShimentListServiceType} from '@/services';
import {useStore} from '@/src/store';

export const useHomeHooks = () => {
  const {userData} = useStore(state => state.userSlice);

  const [loading, setLoading] = useState(false);
  const [shipmentListData, setShipmentListData] = useState();

  const getShipmentList = async (props?: getShimentListServiceType) => {
    setLoading(true);
    try {
      const response = await getShimentListService(props);
      console.log('resssssss', response);
      if (response?.status) {
        setShipmentListData(response.data);
      }
    } catch {}
    setLoading(false);
  };

  return {
    loading,
    getShipmentList,
    shipmentListData,
    userData,
  };
};
