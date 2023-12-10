import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from './../components/shared/Screen';
import BestlearnText from '../components/shared/BestlearnText';
import ItemSeparator from '../components/shared/ItemSeparator';


const confirmationAlert = (course, onPress) => {
    return Alert.alert(course.title, `Are sure to delete ${course.title}?`, [
        {
            text: "Cancel",
            onPress: ()=>{},
            style: "cancel"
        },
        {
            text: "Ok",
            onPress: onPress,
        }
    ], 
    {cancelable: false}
    )
};

const deleteAction = (course, onPress) => {
    return (
        <TouchableOpacity onPress={() => confirmationAlert(course, onPress)}>
            <View style={{
                backgroundColor: "tomato",
                width: 50,
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <MaterialCommunityIcons 
                    name="trash-can"
                    size={35}
                    color="#fff"
                />
            </View>
        </TouchableOpacity>
    );
};

const MyCoursesScreen = () => {

    const [myCourses, setMyCourses] = useState([
        {id: 1, title: 'NodeJS', price: 200},
        {id: 2, title: 'ReactJS', price: 300},
        {id: 3, title: 'electronJS', price: 400},
        {id: 4, title: 'ReactNative', price: 500}
    ]);


    const handleDelete = course => {
        setMyCourses(myCourses.filter( c => c.id !== course.id))
    }


    return ( 
        <Screen style={{alignItems: 'center'}}>
            <BestlearnText size='3' style={styles.title} color='#fff'> My Courses List </BestlearnText>
            <ItemSeparator height={3} />
            <View style={{width: '100%'}}>
                <FlatList 
                    data={myCourses}
                    keyExtractor={c => c.id}
                    renderItem = {({item}) => (
                        <View style={{marginVertical: 10}}>
                            <ItemSeparator height={3}/>
                            <Swipeable 
                                renderLeftActions={() => deleteAction(item, () => handleDelete(item))}
                            >
                                <View style={styles.container}>
                                    <View style={styles.details}>
                                        <BestlearnText size="2.5">
                                            {item.title}
                                        </BestlearnText>
                                        <BestlearnText size="2.5">
                                            {`${item.price} Euro`}
                                        </BestlearnText>
                                    </View>
                                </View>
                            </Swipeable>
                            <ItemSeparator height={3}/>
                        </View>
                    )}
                />
            </View>
        </Screen>
     );
}
 
export default MyCoursesScreen;


const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center'
  },
  container:{
    flexDirection: "row",
    padding: 20,
    backgroundColor: "dodgerblue",
    justifyContent: "center"
   },
   details: {
    marginHorizontal: 10,
    backgroundColor: "#f8f4f4",
    width: "100%",
    padding: 15,
    borderRadius: 14,
    alignItems: "center"
   }
})


