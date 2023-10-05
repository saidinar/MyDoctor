import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('Data stored successfully');
    } catch (error) {
        console.error('Error storing data:', error);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value)
        } else {
            console.log('No data found for the key:', key);
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
};

export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };