import React from 'react'
import {View, ImageBackground, StyleSheet, Text} from 'react-native'
import CustomButton from '../components/shared/CustomButton';


const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground 
            source={require('../assets/bg1.jpg')}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.textContainer}>
              <Text style={styles.firstText}>
                Self learning, Experience, Enter job market
              </Text>
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
    fontSize: 30,
    top: 25,
    color: "tomato",
    textAlign: "center"
  }
})
