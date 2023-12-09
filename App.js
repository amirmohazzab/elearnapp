import React from'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './app/containers/StackNavigator';



const App = () => {

  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
};

export default App;
