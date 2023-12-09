import React from 'react'
import { FlatList, StyleSheet} from 'react-native'
import Screen from './../components/shared/Screen';
import Card from '../components/shared/Card';

const courses = [
    {id: 1, title: 'ReactJS', price: 200, image: require('../assets/photos/reactjs.png')},
    {id: 2, title: 'ReactNative', price: 300, image: require('../assets/photos/reactnative.png')},
    {id: 3, title: 'NodeJS', price: 400, image: require('../assets/photos/nodejs.png')},
    {id: 4, title: 'ElectronJS', price: 500, image: require('../assets/photos/electronjs.jpg')}
]
const CoursesScreen = () => {
    return ( 
        <Screen style={styles.container}>
            <FlatList 
                data={courses}
                keyExtractor={course => course.id.toString()}
                renderItem={({item}) => (
                    <Card 
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
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