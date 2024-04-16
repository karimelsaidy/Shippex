import EncryptedStorage from 'react-native-encrypted-storage';

export const EncryptedLocalStorage = {
  setItem: async (key: string, value: object) => {
    try {
      const jsonValue = JSON.stringify(value);

      await EncryptedStorage.setItem(key, jsonValue);
    } catch {}
  },
  getItem: async (key: string) => {
    try {
      const item = await EncryptedStorage.getItem(key);

      return item == undefined ? null : JSON.parse(item);
    } catch {}
  },

  removeItem: async (key: string) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch {}
  },

  clearStorage: async () => {
    try {
      await EncryptedStorage.clear();
    } catch {}
  },
};
