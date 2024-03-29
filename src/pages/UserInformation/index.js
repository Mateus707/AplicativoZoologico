
import styles from './styles';
import { View,Text, Image, ImageBackground, TextInput, Pressable} from 'react-native';
import { useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { carregar,Update } from './axios';
import LoadView from '../../components/loadView';
const fundo = require('../../../assets/img/Fundo.png')
const logo = require('../../../assets/img/Logo.png')
const editing = require('../../../assets/img/editing.png')
export default function App({navigation}){
const route = useRoute();
const id = route.params?.idUser;
console.log(id)
const [userInfo,setUserInfo] = useState({});
const [load,setLoad] = useState(true); 
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [telefone, setTelefone] = useState('');
const [senha, setSenha] = useState('');
const [edit, setEdit] = useState(false);  
const [input, setInput] = useState({backgroundColor: '#D9D9D9'});

const UpdateApi = async()=>{
  await Update(nome,email,telefone,senha,id);
}
const carregarDadosApi = async()=>
  {
    const userInfo = await carregar(id);
    setUserInfo(userInfo);
    console.log(userInfo)
    setNome(userInfo.nome);
    setEmail(userInfo.email);
    setTelefone(userInfo.telefone);
    setSenha(userInfo.senha);
  }
  useState(() => {
      carregarDadosApi();
        setLoad(false);
});
if(load){
    return (<LoadView/>)
}

function editar(){
  if(edit == true){
    setEdit(false);
    setInput({backgroundColor: '#D9D9D9'})
    console.log(edit);
  } else{
    setEdit(true);
    setInput({backgroundColor: '#F7FFFF'});
    console.log(edit);
  }
}

return (
  <ImageBackground source = {fundo} style={styles.imageBackground}>
        <Image source={logo} style = {styles.logo}/>
        <View style={styles.boxInput}>
          <View style={styles.boxButtonEditar}>
            <Pressable style={styles.buttonEditar} onPress={editar}>
              <Image source={editing} style={styles.editing}/>
            </Pressable>
          </View>
          <TextInput
            style={[styles.input, input]}
            placeholder='nome'
            readOnly = {!edit}
            value={nome}
            onChangeText={(nome) => {setNome(nome)}}
          />
          <TextInput 
            style={[styles.input, input]}
            placeholder='email'
            readOnly = {!edit}
            value={email}
            onChangeText={(email) => {setEmail(email)}}
          />
          <TextInput
            style={[styles.input, input]}
            placeholder='telefone'
            readOnly = {!edit}
            value={telefone}
            onChangeText={(telefone) => {setTelefone(telefone)}}
          />
          <TextInput 
            style={[styles.input, input]}
            placeholder='senha'
            secureTextEntry={true}
            readOnly = {!edit}
            value={senha}
            onChangeText={(senha) => {setSenha(senha)}}
          />        
        </View>
        <View style={styles.boxButton}>
            <Pressable style={styles.button} disabled={!edit} onPress={UpdateApi}>
                <Text style={styles.textButton}>Salvar</Text>
            </Pressable>
        </View>   
      </ImageBackground> 
    )
}
