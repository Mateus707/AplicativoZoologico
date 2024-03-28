import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#59D5E0',
    },
    boxButton:{
      flex:0.15,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
 
    },
    boxInput:{
      flex:0.4,
      justifyContent:'center',
      alignItems:'center',
      gap: 15,
    },
    boxImg:{
      flex:0.45,
      width:'100%',
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'#FFC700',
      borderBottomEndRadius:150,
      borderBottomStartRadius:150,
    
    }, 
    input:{  
      width: '80%',
        height: 40,
        margin:5,
        padding:10,
        borderRadius: 50,
        color: '#000',
        outlineStyle: 'none',
        backgroundColor: '#FFC700',
  
      },
    text:{
      textAlign:'center',
      color:'#000',
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
        height:40,  
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC700',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 20,
       
    },
    load:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
     }, 
    img:{
      width:'60%',
      height:'70%',
  
   },  buttonNP:{
    backgroundColor: 'white',
    width: 200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 2,
    borderColor: 'gold',
    color: 'gold',
    fontSize: '18pt',
  },
modal:{
  flex: 1,
  height: '50%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center'
},

boxModal: {
  flex: 0.33,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: 'gold',
  backgroundColor: 'white',

},

textFinal: {
  fontSize: '18pt',
  color: 'gold',
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
}
     
    
})