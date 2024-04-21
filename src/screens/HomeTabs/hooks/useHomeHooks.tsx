import React, {useState} from 'react';

import {getShimentListService, getShimentListServiceType} from '@/services';

export const useHomeHooks = () => {
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
  };
};
