import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {RFPercentage} from 'react-native-responsive-fontsize'
import { CoursesScreen, ArchiveScreen} from '../screens';
import Screen from '../components/shared/Screen';



const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {

    return ( 
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
     );
}
 
export default TopTabNavigator;