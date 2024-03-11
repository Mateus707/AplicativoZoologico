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
    imgBackground:{
      flex: 1,
     justifyContent: 'center',
     padding: 40,
   }
   ,
    
    
})