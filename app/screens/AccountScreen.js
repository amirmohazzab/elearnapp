import React from 'react'
import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import Screen from './../components/shared/Screen';
import ItemSeparator from '../components/shared/ItemSeparator';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Materialicon from 'react-native-vector-icons/MaterialIcons';


const AccountScreen = ({navigation}) => {

    const handleLogout = async () => {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      navigation.dispatch(StackActions.replace('Welcome'))
    };

    return ( 
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/photo.jpg')} />
                <View style={styles.details}>
                    <Text style={styles.title}> Amir Mohazzab</Text>
                    <Text style={styles.subTitle}> ahm.mohazzab@gmail.com</Text>
                </View>
                <TouchableOpacity onPress={()=> {}} style={{alignSelf: 'center', marginLeft: 20}}>
                    <Ionicon name='settings' size={40} color='tomato' />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={3}/>
            <TouchableOpacity underlayColor='#f8f4f4' onPress={handleLogout} >
                <View style={[styles.container, {flexDirection: "row-reverse"}]}>
                    <Materialicon name="logout" size={32} color="tomato"  />  
                    <View style={styles.subTitle}>
                        <Text style={styles.title}> Logout </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Screen>
     );
}
 
export default AccountScreen;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 15
  },
  screen: {
    backgroundColor: '#f8f4f4'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#6e6969'
  },
  subTitle: {
    color: '#6e6969'
  }
})
