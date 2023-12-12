import React, {useContext} from 'react'
import { FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import Screen from './../components/shared/Screen';
import Card from '../components/shared/Card';
import BestlearnContext from '../context/BestlearnContext';



const CoursesScreen = ({navigation}) => {

    const {courses, loading} = useContext(BestlearnContext)

    return ( 
        <Screen style={styles.container}>
            <FlatList 
                data={courses}
                keyExtractor={course => course._id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', {course: item})}> 
                        <Card 
                            _id = {item._id}
                            title={item.title}
                            price={item.price}
                            image={item.imageUrl}
                        />
                    </TouchableOpacity>
                )}
            />
        </Screen>
     );
}
 
export default CoursesScreen;


const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#f8f4f4"
    },
    image: {
        width: '100%',
        height: 300
    }
  })