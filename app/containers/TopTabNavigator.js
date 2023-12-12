import React, {useState, useEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Toast from 'react-native-tiny-toast'
import {RFPercentage} from 'react-native-responsive-fontsize'
import { CoursesScreen, ArchiveScreen} from '../screens';
import Screen from '../components/shared/Screen';
import BestlearnContext from '../context/BestlearnContext';
import { fetchCourses } from '../services/courses';
import { loadingToast } from '../utils/toast';




const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {

    const [getCourses, setCourses] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async() => {
                loadingToast('Loading...')
                const {courses} = await fetchCourses();
                setCourses(courses);
                Toast.hide();
            };
            fetchData();
        } catch (err) {
            console.log(err);
            Toast.hide();
        }
    }, []);

    return ( 
        <BestlearnContext.Provider value={{courses: getCourses}}>
            <Screen> 
                <TopTab.Navigator 
                    initialRouteName="Courses"
                    backBehavior="none"
                    screenOptions={{
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "grey",
                        tabBarIndicatorStyle: {backgroundColor: 'skyblue'},
                        tabBarLabelStyle: {fontSize: RFPercentage(2)},
                        tabBarStyle: {backgroundColor: '#F8F4F4'}
                    }} 
                >
                    <TopTab.Screen name="AllCourses" component={CoursesScreen} options={{tabBarLabel: "All Courses"}} />
                    <TopTab.Screen name="Archive" component={ArchiveScreen}  />
                </TopTab.Navigator>
            </Screen>
        </BestlearnContext.Provider>
                
     );
}
 
export default TopTabNavigator;