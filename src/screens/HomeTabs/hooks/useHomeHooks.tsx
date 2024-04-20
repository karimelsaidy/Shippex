import React, {useState} from 'react';

import {shipmentList} from '@/services/dummyData';

export const useHomeHooks = () => {
  const [loading, setLoading] = useState(false);
  const [shipmentListData, setShipmentListData] = useState();

  const getShipmentList = () => {
    setLoading(true);
    setTimeout(() => setShipmentListData(shipmentList), 3000);
    setLoading(false);
  };

  return {
    loading,
    getShipmentList,
    shipmentListData,
  };
};
