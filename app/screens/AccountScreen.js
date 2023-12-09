import React from 'react'
import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from 'react-native'
import Screen from './../components/shared/Screen';
import ItemSeparator from '../components/shared/ItemSeparator';
//import Icon from '../components/shared/Icon';


const AccountScreen = () => {
    return ( 
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/photo.jpg')} />
                <View style={styles.details}>
                    <Text style={styles.title}> Amir Mohazzab</Text>
                    <Text style={styles.subTitle}> ahm.mohazzab@gmail.com</Text>
                </View>
                <TouchableOpacity onPress={()=> {}} style={{alignSelf: 'center', marginLeft: 20}}>
                    {/* <Icon name='settings' size={20} backgroundColor='tomato' /> */}

                </TouchableOpacity>
            </View>
            <ItemSeparator height={3}/>
            <TouchableOpacity underlayColor='#f8f4f4' onPress={()=> {}} >
                <View style={styles.container}> 
                    {/* <Icon  name='logout' backgroundColor='tomato' /> */}
                    <View style={styles.details}>
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
