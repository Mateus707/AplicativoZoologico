
import styles from './styles';
import { View,Text,ActivityIndicator} from 'react-native';
import { useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { getNameStorage,getEmailStorage,getTelefoneStorage,getSenhaStorage } from './asyncStorage';
import { carregar } from './axios';
export default function App({navigation}){
const route = useRoute();
const id = route.params?.idUser;
const [userInfo,setUserInfo] = useState({});
const [load,setLoad] = useState(true); 
const [nome, setNome] = useState();
const [email, setEmail] = useState();
const [telefone, setTelefone] = useState();
const [senha, setSenha] = useState();  
const carregarDados = async() =>
    {  
    const nomeS = await getNameStorage();
    const emailS = await getEmailStorage();
    const telefoneS = await getTelefoneStorage();
    const senhaS = await getSenhaStorage();
     setNome(nomeS)
     setEmail(emailS)
     setTelefone(telefoneS)
     setSenha(senhaS)
  }
const carregarDadosApi = async()=>
  {
    const userInfo = await carregar(id);
    setUserInfo(userInfo);
    console.log(userInfo.nome)
  }
      useState(() => {
         carregarDadosApi();
           carregarDados();
         
        setLoad(false)
      });  
if(load){
    return (<ActivityIndicator style={styles.load}
            animating={load}
            color={'blue'}
            size={'large'}
            />)
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
