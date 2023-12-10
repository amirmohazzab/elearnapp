import React from 'react'
import {View, StyleSheet, Image, ScrollView, TouchableHighlight, Text} from 'react-native';
import BestlearnText from './BestlearnText';



const Card = ({title, price, image, courseInfo=null}) => {
    return ( 
        <View style={styles.card}>
            <Image resizeMode='contain' source={image} style={styles.courseImage}/>
            <View style={{padding: 20}}>
                <Text style={styles.title}> {title} </Text>
                <View style={styles.courseDetails}> 
                    <Text style={{color: 'black'}}> {price} </Text> 
                    <Text style={{color: 'black'}}> {price} </Text> 
                </View>
            </View>
            {courseInfo ? (
              <View style={{flex: 1}}>
                <BestlearnText size="2.5">
                  Course info :
                </BestlearnText>
                <ScrollView>
                  <BestlearnText size="2" styles={styles.courseInformation}>
                    {courseInfo}
                  </BestlearnText>
                </ScrollView>
              </View>
            ) : null}
        </View>
     );
}
 
export default Card;


const styles = StyleSheet.create({
    card: {
      flex: 1,
      borderRadius: 15,
      backgroundColor: "white",
      marginVertical: 20,
    },
    courseImage: {
      width: "100%",
      height: 220
    },
    courseDetails: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    courseInformation: {
      textAlign: "justify",
      marginVertical: 10,
      lineHeight: 25,
      color: 'black'
  },
    title: {
      marginBottom: 7,
      alignSelf: "center",
      color: 'black'
  }
  })
  