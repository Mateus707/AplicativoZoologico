
import styles from './styles';
import { View,Text} from 'react-native';
import { useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { carregar } from './axios';
import LoadView from '../../components/loadView';

export default function App({navigation}){
const route = useRoute();
const id = route.params?.idUser;
const [userInfo,setUserInfo] = useState({});
const [load,setLoad] = useState(true); 

const carregarDadosApi = async()=>
  {
    const userInfo = await carregar(id);
    setUserInfo(userInfo);
    console.log(userInfo.nome)
  }
  useState(() => {
      carregarDadosApi();
        setLoad(false);
});
if(load){
    return (<LoadView/>)
}
return (
  <View style={styles.container}>  
      {(userInfo && 
        <View style={styles.boxText}>
            <Text style={styles.text}>{userInfo.nome}</Text>
            <Text style={styles.text}>{userInfo.email}</Text>
            <Text style={styles.text}>{userInfo.telefone}</Text>
            <Text style={styles.text}>{userInfo.senha}</Text>
        </View>
      )}
  </View>
    )
}
