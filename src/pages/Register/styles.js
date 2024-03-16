import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth:2,
      borderColor:'black',
    },
    boxButton:{
      flex:0.25,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      borderColor:'black',
 
    },
    boxTitulo:{
      flex: 0.4,
      borderWidth:2,
      borderColor:'black',
      justifyContent:'center',
      alignItems:'center'
    },
    boxInput:{
      flex:0.35,
      borderWidth:2,
      borderColor:'black',
      justifyContent:'center',
      alignItems:'center'
    },
    input:{  
      width: '80%',
        height: 40,
        margin:5,
        padding:10,
        borderRadius: 50,
        color: '#fff',
        outlineStyle: 'none',
        backgroundColor: '#3fdc34',
  
      },
    text:{
      textAlign:'center',
      color:'white',
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
        width: '60%',
        height:30,  
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3fdc34',
       
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 20,
       
    },
    load:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
     }
     
    
})