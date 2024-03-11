import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignContent:'center',
      borderWidth:2,
      borderColor:'black',
    },
    input:{  
      height: 30,
      margin:5,
      padding:10,
      borderRadius: 50,
      color: '#000',
      outlineStyle: 'none',
      backgroundColor: '#fff'
    },
    text:{
      textAlign:'center'
    },
    textTitulo:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
      margin:5,
      fontFamily: 'Roboto_700Light'

    },
    textSubTitulo:{
      textAlign:'center',
      fontSize: 12,
      fontFamily: 'Roboto_100Thin'
    },
    button:{
      width: '20%',
      color: '#fff',
      borderColor: '#fff',
    },
    boxButton:{
      width:'100%',
      alignItems:'flex-end',
 
    },
    boxTitulo:{
      flex: 0.25,
    },
    imgBackground:{
       flex: 1,
      justifyContent: 'center',
      padding: 40,
    },
    load:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
     }
     
    
})