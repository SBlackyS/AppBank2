import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
import { useEffect, useState } from 'react';
import { RootStackParams } from '../navigator/StackNavigation';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends DrawerScreenProps<any, any>{};
interface Payload {
  nombre: string,
  correo: string,
  password: string
}



export const BilleteraScreen = ({route, navigation } : Props) => {
  const params = route.params as Payload;
  
  const { correo, nombre, password } = params;

  const [modalTar, setModalTar] = useState(false);
  const [cualModal, setCualModal] = useState('');
  return (
    <>
    <View style={ styles.globalMargin} >
    
    
    <View style={ {
            ...styles.modalContainer,
            display: `${(modalTar === false) ? 'none' : 'flex'}`
            } }>
      <View style={ {
            ...styles.modalObjets,            
            } }>

        <TextInput
          style={{
            ...styles.modelNumInput,
            display: (cualModal === 'ingre') ? 'flex' : 'none'
          }}
          keyboardType='numeric'
          placeholder='Cantidad a ingresar'

        >
        </TextInput>

        <TextInput
          style={{
            ...styles.modelNumInput,
            display: (cualModal === 'transDebit') ? 'flex' : 'none'
          }}
          keyboardType='numeric'
          placeholder='Cantidad a transferir'
        >
        </TextInput>

        <TextInput
          style={{
            ...styles.modelNumInput,
            display: (cualModal === 'transCredit') ? 'flex' : 'none'
          }}
          keyboardType='numeric'
          placeholder='Cantidad a transferir'
        >
        </TextInput>

        <TextInput
          style={{
            ...styles.modelNumInput,
            display: (cualModal === 'pagarCredit') ? 'flex' : 'none'
          }}
          keyboardType='numeric'
          placeholder='Cantidad a pagar'
        >
        </TextInput>


          <TouchableOpacity
          style={ {
            ...styles.botonGrande,
            right: 10,
            backgroundColor: '#D6E4E5',
          } }
          onPress={ () => setModalTar(false) }
          >
            <Text style={ styles.btnPay }>Pay</Text>
          </TouchableOpacity>

      </View>
    </View>



       <Text style={ styles.title }>Bienvenido: {nombre}</Text>

      <View style={styles.cajaTarjetas}>
          <View style={{
                  ...styles.cajaTarjetaStyle,
                  backgroundColor: "#FF9427",
                  
                  }}>
          <Text style={ styles.botonGrandeTextoTitulo }>Debit Card</Text>
             
             {/* Para Ingresar */}
              <TouchableOpacity 
                style={ {
                  ...styles.botonGrande,
                  right:15
                } }
                onPress={ () => {
                  setCualModal('ingre');
                  setModalTar(true)
                } }
                >
                <Text style={ styles.botonGrandeTexto }>Ingresar</Text>
                
              </TouchableOpacity>

              {/* Para transferir */}
              <TouchableOpacity 
                style={ {
                  ...styles.botonGrande,
                  
                  left: 15,
                } }
                onPress={ () => {
                  setCualModal('transDebit');
                  setModalTar(true)
                } }
                >
                <Text style={ styles.botonGrandeTexto }>Transfer</Text>
                
              </TouchableOpacity>
            </View>

            <View style={{
                  ...styles.cajaTarjetaStyle,
                  backgroundColor: '#5856D6',
                  
                  }}>
          <Text style={ {
                  ...styles.botonGrandeTextoTitulo
                  } }>Credit Card</Text>
              <TouchableOpacity 
                style={ {
                  ...styles.botonGrande,
                  right:15
                } }
                onPress={ () => {
                  setCualModal('pagarCredit');
                  setModalTar(true)
                } }
                >
                <Text style={ {
                        ...styles.botonGrandeTexto
                        
                        } }>Pay Card</Text>
                
              </TouchableOpacity>
              <TouchableOpacity 
                style={ {
                  ...styles.botonGrande,
                  
                  left: 15,
                } }
                onPress={ () => {
                  setCualModal('transCredit');
                  setModalTar(true)
                } }
                >
                <Text style={ styles.botonGrandeTexto }>Transfer</Text>
                
              </TouchableOpacity>
            </View>      
      </View>
    </View>
    </>
  )
}
