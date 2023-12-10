import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import MyCoursesScreen from '../screens/MyCoursesScreen';
import TopTabNavigator from './TopTabNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BottomTab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
      <BottomTab.Navigator
        initialRouteName='Courses'
        screenOptions={({route}) => ({
          tabBarIcon : ({focused, color, size}) => {
            let iconName;

            if (route.name === "Courses") {
              iconName = "school";
            } else if (route.name === "Account") {
              iconName = focused ? "account-circle" : "account-circle-outline";
            } else if (route.name === "MyCourses") {
              iconName = "message-video"
            }

            return (
              <MaterialCommunityIcons 
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          headerShown: false,
         
        })}
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
  