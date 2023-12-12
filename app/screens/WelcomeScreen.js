import React, {useEffect} from 'react'
import {View, ImageBackground, StyleSheet, Alert, BackHandler} from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigationState } from '@react-navigation/native';
import CustomButton from '../components/shared/CustomButton';
import BestlearnText from '../components/shared/BestlearnText';
import { decodeToken } from '../utils/jwt';
import { customToast } from '../utils/toast';



const confirmationAlert = () => {
  return Alert.alert('Server Connection', 'Server connected using App', [
      
      {
          text: "Ok",
          onPress: BackHandler.exitApp,
      }
  ], 
  {cancelable: false}
  )
};


const WelcomeScreen = ({navigation}) => {

  const screenIndex = useNavigationState(state => state.index);

    useEffect(() => {
      let currentCount = 0;
      console.log(screenIndex);

      if (screenIndex <= 0) {
        BackHandler.addEventListener("hardwareBackPress", () => {
          if (currentCount === 1) {
            BackHandler.exitApp();
            return true;
          }

          currentCount += 1;
          customToast("Touch again back button to exit");

          setTimeout(() => {
            currentCount === 0;

          }, 1000);

          return true;
        });
      }
    }, []);

    useEffect(() => {
      const checkForNet = async () => {
        const state = await NetInfo.fetch();
        if(!state.isConnected) confirmationAlert();
        else {
          const token = await AsyncStorage.getItem("token");
          const userId = JSON.parse(await AsyncStorage.getItem("userId"));

          if (token !== null && userId !== null) {
            const decodedToken = decodeToken(token);

            if (decodedToken.user.userId === userId)
                navigation.dispatch(StackActions.replace('Home'))
            else {
              await AsyncStorage.removeItem('token');
              await AsyncStorage.removeItem('userId');
              navigation.navigate('Login');
            }
          }
        }
      }
      checkForNet();
    }, []);

    return (
        <ImageBackground 
            source={require('../assets/bg1.jpg')}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.textContainer}>
              <BestlearnText size='3' style={styles.firstText}>
                Self learning, Experience, Enter job market
              </BestlearnText>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title='Enter'color="royalblue" onPress={()=> navigation.navigate('Login')}/>
                <CustomButton title='Register' onPress={()=> navigation.navigate('Register')}/>
            </View>
        </ImageBackground>
    )
};


export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    width: "100%",
    padding: 20
  },
  textContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  firstText: {
    fontWeight: "bold",
    top: 25,
    color: "tomato",
    textAlign: "center"
  }
})
