import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Pressable,ImageBackground } from 'react-native'; // Importe FlatList de react-native
import LoadView from '../../components/loadView';
import { carregarTerritorios } from './axios';
import styles from '../Territorios/styles';
import fundo from '../../../assets/img/Fundo.png';
import { Route } from '@react-navigation/native';
export default function App({navigation}) {
  const [territorios, setTerritorios] = useState([]);
  const [load, setLoad] = useState(true);
  const navegacao = (idTerritorio) => {
    navigation.navigate("Animais",{territorioId:idTerritorio});
  }

  useEffect(() => {
    const dadosTerritorio = async () => {
      const response = await carregarTerritorios();
      setTerritorios(response);
      console.log(response)
      setLoad(false);
    };
    dadosTerritorio();
  }, []);

  if (load) {
    return <LoadView />;
  }
  const trazedorDeterritorio = territorios.slice(0, 3);
  return (
    <ImageBackground source = {fundo} style={styles.imageBackground}>
    <FlatList
      data={trazedorDeterritorio}
      contentContainerStyle={styles.flatList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        

          <View style={styles.boxTerritorio}>
            <View  style={styles.textFlatlist} >
              <Text style={styles.textTituloFlatlist} >{item.nomeTerritorio}</Text> 
              <Text style={styles.textDescricaoFlatlist} >{item.nomeTerritorio}</Text> 
            </View>
           
            <Pressable onPress={()=>navegacao(item.idTerritorio)}>                
              <Image
                    source={{uri: item.imgTerritorio}}
                    style={styles.imgFlatlist}
                />
              </Pressable>
          </View>
      )}
      initialNumToRender={2} 
    />
        </ImageBackground> 
  );
}
