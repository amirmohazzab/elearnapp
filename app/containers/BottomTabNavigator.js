import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import MyCoursesScreen from '../screens/MyCoursesScreen';
import TopTabNavigator from './TopTabNavigator';
import { CoursesScreen } from '../screens';


const BottomTab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
      <BottomTab.Navigator
        initialRouteName='Courses'
        screenOptions={{
          headerShown: false,
        
        }}
        tabBarOptions= {{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          activeBackgroundColor: "lightcyan",
          tabBarLabel: {
            fontSize: 16
          }
        }}     
      >
        <BottomTab.Screen name='Account' component={AccountScreen}/>
        <BottomTab.Screen name='Courses' component={TopTabNavigator}/>
        <BottomTab.Screen name='MyCourses' component={MyCoursesScreen} options={{
            tabBarLabel: "My Courses",
            tabBarBadge: 3,
          }}/>
      </BottomTab.Navigator>
    )
}


export default BottomTabNavigator
  