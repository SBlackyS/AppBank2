import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    botonGrandeTexto: {
        color:'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100
    },
    containerImage: {
        marginTop: 10,
        alignItems: 'center'
    },
    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: 'flex-start'
    },
    menuTexto:{
        fontSize: 20
    },
    menuBoton:{
        marginBottom:10
    },
    containerPerfil: {
        justifyContent:'center',
        alignItems: 'center',
    }
});