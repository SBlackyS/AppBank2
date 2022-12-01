import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerLogin:{
        flex:1,
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerHijo: {
        position: 'relative',
        height: 500,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        
    },
    containerNieto: {
        flex: 3,
        
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    titleFormCaja:{
        width: 200,
        borderRadius: 23,
        top: 10,
        // flex: 1,
        height: 100,
        backgroundColor: 'white' ,
        justifyContent:'center',
        alignItems: 'center'
    },
    titleForm:{
        // height: 10,
        // top: 25,
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: "bold"
    },
    form:{
        textAlign: "center",
        top: 45,
        marginVertical: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 25,
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: 'white',
        color: 'black',
        width: 300
    },
    btnCrearAcc:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,        
        border:1,
        backgroundColor: '#28C4D9',
        height: 70,
        width: 140,
        right: 10,
        position: 'absolute',
        bottom: 30
        
    },
    btnTexto:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    cajaTarjetas: {
        justifyContent: 'flex-start',
        // backgroundColor:'red',
        alignItems: 'center',
        
        flex: 1,
        width: '100%',
        
        

    },
    cajaTarjetaStyle: {
        borderRadius: 10,
        borderColor: '#434242',
        borderWidth:5,
        marginBottom: 20,
        width: 250,
        height: 125,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems: 'center',
        
        
    },
    globalMargin: {
        justifyContent: "flex-start",
        alignItems:'flex-start',
        borderColor: '#F49D1A',
        borderWidth: 10,
        backgroundColor: 'white',
        flex:1,
        padding:10,
        position: 'relative'
    },
    title: {
        alignSelf:'center',
        fontSize: 30,
        marginBottom: 20
    },
    botonGrande: {
        position: 'absolute',
        width:85,
        flexWrap: 'wrap',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#434242',
        borderWidth: 3,
        borderRadius: 3,
        backgroundColor:'white'
        
    },
    botonGrandeTexto: {
        fontSize: 20,
        
        textAlign:'center',

        width: '100%'
    },
    botonGrandeTextoTitulo: {
        width: '100%',
        height: 25,
        backgroundColor:'white',
        flexWrap: 'wrap',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomColor: '#434242',
        borderBottomWidth: 1,
        
    },
    btnPay:{
        position: 'absolute',
        
    },
    modalContainer:{
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderWidth: 10,
        borderRadius: 3,
        borderColor: '#393E46',
        flex: 1,
        width: 300,
        height: 150,
        zIndex: 1,
        alignSelf: 'center',
        top: '60%'
    },
    modalObjets:{
        width: '100%',
        backgroundColor: 'white'
    },
    modelNumInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 1,
        width: '60%',
        left: 10,
        paddingHorizontal: 10,
    }
})