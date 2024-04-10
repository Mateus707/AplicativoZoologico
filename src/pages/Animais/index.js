import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import LoadView from '../../components/loadView';
import { carregarAnimais } from './axios';
import styles from '../Animais/styles';


export default function App({route}) {
  const [animais, setAnimais] = useState([]);
  const [load, setLoad] = useState(true);
  const { territorioId } = route.params;
  console.log(territorioId)
  useEffect(() => {
    const dadosAnimais = async () => {
      const response = await carregarAnimais(territorioId);
      
      console.log(response);
      setAnimais(response);
      setLoad(false);
      
    };
    dadosAnimais();

  }, []);

  if (load) {
    return <LoadView />;
  }

  return (
    <FlatList
      data={animais}
      style={styles.container}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
                          
            <Text>{item.nomeAnimal}</Text> 
              

        </View>
      )}
      
    />
  );
}
