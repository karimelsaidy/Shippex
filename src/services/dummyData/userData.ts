export const userData = {
  personalInfo: {
    _id: '10001',
    firstName: {en: 'karim', ar: 'كريم'},
    lastName: {en: 'Mohammed', ar: 'محمد'},
  },
};

export const shipmentList = [
  {
    _id: 0,
    label: 'AWB',
    cardReference: '41785691423',
    status: 'received',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
  {
    _id: 1,
    label: 'AWC',
    cardReference: '41785691423',
    status: 'error',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
  {
    _id: 2,
    label: 'AWD',
    cardReference: '41785691423',
    status: 'delivered',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
  {
    _id: 3,
    label: 'AWF',
    cardReference: '41785691423',
    status: 'received',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
  {
    _id: 4,
    label: 'AWE',
    cardReference: '41785691423',
    status: 'onHold',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
  {
    _id: 5,
    label: 'AWG',
    cardReference: '41785691423',
    status: 'canceled',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
  {
    _id: 6,
    label: 'HKL',
    cardReference: '2341234564',
    status: 'error',
    address: {
      from: {city: 'Cairo', details: 'Dokki, 22 Nile St.'},
      to: {city: 'Alexandria', details: 'Smoha, 22 max St.'},
    },
    phoneNumber: '+201060688416',
  },
];

export const shipmentStatusList = [
  {label: 'received', value: 'received'},
  {label: 'Error', value: 'error'},
  {label: 'Delivered', value: 'delivered'},
  {label: 'Canceled', value: 'canceled'},
  {label: 'On Hold', value: 'onHold'},
  {label: 'Lost', value: 'lost'},
  {label: 'Put Way', value: 'putway'},
];

export const getShipmentList = (props?: {status: string[]; word: string}) => {
  return props?.status?.length > 0 || !!props?.word
    ? shipmentList.filter(item => {
        const sameStatus =
          props?.status?.length > 0
            ? props?.status?.includes(item.status)
            : true;
        const sameWord = props?.word ? item.label?.includes(props?.word) : true;
        return sameStatus && sameWord;
      })
    : shipmentList;
};
