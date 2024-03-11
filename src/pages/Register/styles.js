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
      backgroundColor: '#fff',
      outlineStyle: 'none',
    },
    text:{
      textAlign:'center'
    },
    textTitulo:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
      margin:5,
      

    },
    textSubTitulo:{
      textAlign:'center',
      fontSize: 12,
      
    },
    button:{
      width: '40%',
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