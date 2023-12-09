import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen, LoginScreen, RegisterScreen} from '../screens';
import BottomTabNavigator from '../containers/BottomTabNavigator';


const Stack = createStackNavigator();


const StackNavigator = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
        </Stack.Navigator>
     );
}
 
export default StackNavigator;