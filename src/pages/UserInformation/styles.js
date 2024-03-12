import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth:2,
      borderColor:'black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green'
    },
    text:{
      textAlign:'center',
      fontSize: 21,
      fontFamily: 'Truculenta-Regular'
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
      flex: 0.25,
      alignItems: 'center',
      borderWidth: 2,
      backgroundColor: 'white',
      justifyContent: 'space-evenly',
      padding: 10,
    },
    load:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
     }
    
})