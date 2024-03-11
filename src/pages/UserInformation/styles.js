import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      borderWidth:2,
      borderColor:'black',
    },
    text:{
      textAlign:'center',
      fontSize: 18
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
     
    },
    boxText:{
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    load:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
     }
    
})