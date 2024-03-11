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
    textButton:{
      textAlign:'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    textTitulo:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 24
    },
    button:{
      width: '50%',
      height:30,
      borderWidth:1,
      borderRadius:50,
      justifyContent: 'center',
      backgroundColor:'#23800d',
     
    },
    boxButton:{
      padding: 10,
      marginTop:10,
      width:'100%',
      alignItems:'center',
     
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