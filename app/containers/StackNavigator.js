import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen, LoginScreen, RegisterScreen, CourseDetailScreen} from '../screens';
import BottomTabNavigator from '../containers/BottomTabNavigator';


const Stack = createStackNavigator();


const StackNavigator = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} initialParams={{successRegister: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="CourseDetail" component={CourseDetailScreen}/>
        </Stack.Navigator>
     );
}
 
export default StackNavigator;