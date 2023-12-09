import React from 'react'
import {RFPercentage} from 'react-native-responsive-fontsize'
import {Text, StyleSheet} from 'react-native'



const BestlearnText = ({size, children, style}) => {
    return ( 
        <Text style={[{fontSize: RFPercentage(size)}, style]}> {children} </Text>
     );
}
 
export default BestlearnText;


