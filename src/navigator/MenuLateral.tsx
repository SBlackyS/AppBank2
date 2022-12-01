import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigation';
import { useWindowDimensions, Text, View } from 'react-native';
import { styles } from '../theme/appTheme2';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
        
      }}
      drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator" options={{title:"Hola"}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}:  DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      <View style={ styles.containerImage }>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png' }}
          style={ styles.avatar }
        />
      </View>

    {/* Opciones de Menú */}

      <View style={ styles.menuContainer }>
        
        <TouchableOpacity
        style={ styles.menuBoton }
        onPress={ () => navigation.navigate( 'StackNavigator' ) }
        >
          <Text style={ styles.menuTexto }>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={ styles.menuBoton }
        onPress={ () => navigation.navigate( 'SettingsScreen' ) }
        >
          <Text style={ styles.menuTexto }>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}