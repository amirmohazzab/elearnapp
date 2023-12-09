import React from 'react'
import { View, StyleSheet } from 'react-native'
//import {Ionicons} from 'react-native-vector-icons'


const Icon = ({name, size=40, backgroundColor="#fff", iconColor="fff"}) => {
    return ( 
        <View style={styles.container}>
            {/* <Ionicons 
                name={name}
                color={iconColor}
                size={size}
            /> */}
        </View>
     );
}
 
export default Icon;

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size, 
    borderRadius: size/2, 
    backgroundColor,
    justifyContent: "center", 
    alignItems: "center" 
  }
})
