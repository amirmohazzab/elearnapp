import React from 'react'
import {RFPercentage} from 'react-native-responsive-fontsize'
import {Text} from 'react-native'



const BestlearnText = ({size, children, style, color='#000'}) => {
    return ( 
        <Text style={[{fontSize: RFPercentage(size), color}, style]}> {children} </Text>
     );
}
 
export default BestlearnText;


