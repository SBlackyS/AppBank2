import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme2';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { BilleteraScreen } from './BilleteraScreen';


export const SettingsScreen = (props : any) => {
console.log(props)
  //Protege de la arte de arriba de la pantalla, haciendo una separación
  const insets = useSafeAreaInsets();

  

  return (
    <View style={{marginTop:insets.top, flex: 1, borderColor:'#3B3486', borderWidth:10,}}>
      <View style={ styles.containerPerfil }>

        <Text style={ {
          ...styles.title,
          marginTop: insets.top + 20,
        } }>Perfil</Text>

        <Text>Your Password</Text>
        <TextInput

          value='val'
        >

        </TextInput>
  
      </View>
    </View>  
    )
}
