import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
// import { PersonaScreen } from '../screens/PersonaScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { BilleteraScreen } from '../screens/BilleteraScreen';


export type RootStackParams = {
  LoginScreen: any,
  BilleteraScreen:any,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
      headerShown: false, //Quita la cabecera
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle:{
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BilleteraScreen" options={ { title:"Billetera" } } component={BilleteraScreen} /> 
      {/* <Stack.Screen name="PersonaScreen" component={ PersonaScreen } /> */}
    </Stack.Navigator>
  );
}