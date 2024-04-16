import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const setLocalStorage = (key: string, value: string) => {
  storage.set(key, JSON.stringify(value));
};
export const getLocalStorage = (item: string) => {
  // return storage.getString(item);
  return JSON.parse(storage.getString(item));
};
export const removeFromLocalStorage = (item: string) => {
  storage.delete(item);
};
