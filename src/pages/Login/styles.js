import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: '10%',
  },
  boxInput:{
    marginTop: '20%',
    gap: 20,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{  
    width: '100%',
    height: 40,
    padding:10,
    borderRadius: 10,
    outlineStyle: 'none',
    backgroundColor: '#F7FFFF',
    borderWidth: 1,
    borderColor: '#205732'
  },
  boxSenha:{
    flex:0.10,
    alignItems:'center',
    justifyContent: 'center',
  },
  textSenha:{
    fontSize:13,
  },
  textButton:{
    textAlign:'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  boxButton:{
    marginTop: '5%',
    gap: 20,
    width: '50%',
  },  
  button:{
    width: '100%',
    height: 40,
    backgroundColor: '#205732',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  load:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})