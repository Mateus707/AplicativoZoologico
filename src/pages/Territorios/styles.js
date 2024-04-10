import { StyleSheet } from "react-native";

export default StyleSheet.create({

    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
 flatList:{
   flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 boxTerritorio:{
   backgroundColor:'white',
   width:350,
   height:150,
   marginBottom: 10,
   borderRadius:20,
   borderWidth: 2,
   padding:10,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderColor: 'black',
 },
 
 imgFlatlist:{
   height: 130,
   width: 130,
 
 },
 textFlatlist:{
   flex:1,
   height:'100%',
   flexDirection: 'column',
   justifyContent: 'space-between',
 },
 textTituloFlatlist:{
   fontWeight: 'bold',
   color: 'green',
   fontSize: 20,
   alignItems:'flex-start',
 },
 textDescricaoFlatlist:{

   fontWeight: 'bold',
   color: 'green',
   fontSize: 15,
   alignItems:'flex-end',

 },
})