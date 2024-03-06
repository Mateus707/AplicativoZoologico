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
      borderWidth:2,
      borderColor:'black',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  
    },
    text:{
      textAlign:'center'
    },
    textTitulo:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 24
    },
    button:{
      width: '20%',
      borderWidth:2,
      borderColor:'black',
    },
    boxButton:{
      width:'100%',
      alignItems:'flex-end',
      borderWidth:2,
      borderColor:'black',
     
    }
    
})