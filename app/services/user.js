
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from "./"

export const registerUser = async (user) => {
    try {
        return await http.post(`${http.url}/auth/register`, JSON.stringify(user));
    } catch (err) {
        console.log(err);
        
    }
}

export const loginUser = async (user) => {
    try {
        const data =  await http.post(`${http.url}/auth/login`, JSON.stringify(user));
        await AsyncStorage.setItem('token', JSON.stringify(data.data.data.token));
        return data;
        
    } catch (err) {
        console.log(err);
        
    }
}