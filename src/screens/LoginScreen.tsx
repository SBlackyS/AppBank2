import React from 'react'
import { Text, View, TouchableOpacity, useWindowDimensions, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useState, useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/core';

interface Props extends DrawerScreenProps<any, any>{};

export const LoginScreen = ({ navigation } : Props) => {
  const [newAcc, setNewAcc] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={ styles.containerLogin }>
      <View style={ {
              ...styles.containerHijo,
            
              } }>
        <View style={ styles.titleFormCaja }>
          <Text style={ styles.titleForm }>{ `${ (newAcc == false) ? 'Login' : 'Create User' }` }</Text>

        </View>
        <View style={ styles.containerNieto }>
            <TextInput 
              style={ {
                ...styles.form,
                display: `${(newAcc === false) ? 'none' : 'flex'}`,
                color: 'black'
              } }
              placeholder="Ingresa tu nombre"
              onChangeText={ nombre => setNombre(nombre) }
              defaultValue={ nombre }
            />
          <TextInput 
              style={ styles.form }
              placeholder="Ingrese su correo"
              onChangeText={ correo => setCorreo(correo) }
              value={ correo }
              />

          <TextInput 
              style={ styles.form }
              placeholder="********"
              secureTextEntry={ true }
              onChangeText={ password => setPassword(password) }
              value={ password }
              />

          <TouchableOpacity
            style={ {
              ...styles.btnCrearAcc,
              right: (newAcc === true) ? '25%' : 10
            } }
            onPress={ (newAcc === false) ? () => setNewAcc(true) : () => setNewAcc(false) }
            >
              
            <Text style={styles.btnTexto}>{(newAcc === false) ? 'Crear Cuenta' : 'Registrarse / Volver'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ () => {
              navigation.navigate('BilleteraScreen', {
                nombre,
                correo,
                password
              });
            
            } }
            style={ {
              ...styles.btnCrearAcc,
              left: 10,
              display: `${ (newAcc === true) ? 'none' : 'flex' }`
            } }
            
            >
              <Text style={ styles.btnTexto }>Start</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}