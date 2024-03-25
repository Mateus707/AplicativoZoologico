import styles from './styles';
import { View,Text,Pressable,TextInput,Image,ActivityIndicator} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { carregar } from './axios';
import {setTelefoneStorage,setEmailStorage,setSenhaStorage,setNomeStorage} from './asyncStorage';
import leao from '../../../assets/img/pngwing.com.png'
export default function App(){
    
        const navigation = useNavigation();
        const [load,setLoad] = useState(false);
        const [nome, setNome] = useState();
        const [email, setEmail] = useState();
        const [telefone, setTelefone] = useState();
        const [senha, setSenha] = useState();

    const carregarStorage = async()=>{
         setNomeStorage(nome);
         setSenhaStorage(senha);
         setEmailStorage(email);
         setTelefoneStorage(telefone);
    }
    const chamadorFuncao = async() => {
        await carregar(nome,email,senha,telefone);
        await carregarStorage();
       if(nome && email && telefone && senha != undefined){
        navigation.navigate('home');
       }
    }

    useState(() => {
        setTimeout(() => {
            setLoad(false)
        },1000)
       
    })
    
    if(load){
        return (<ActivityIndicator style={styles.load}
            animating={load}
            color={'blue'}
            size={'large'}
            />)
    }
    return (
        <View style={styles.container}>
             <View style={styles.boxImg}>
                <Image  style={styles.img} source={leao}/>
            </View>
            <View style={styles.boxInput}>
                <TextInput
                style={styles.input}
                placeholder='nome'
                onChangeText={(nome) => {setNome(nome)}}
                />
                     <TextInput 
                style={styles.input}
                placeholder='email'
                onChangeText={(email) => {setEmail(email)}}
                />
            <TextInput
            style={styles.input}
           placeholder='telefone'
           onChangeText={(telefone) => {setTelefone(telefone)}}
            />
            <TextInput 
                style={styles.input}
                placeholder='senha'
                secureTextEntry={true}
                onChangeText={(senha) => {setSenha(senha)}}
                />        
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button} onPress={chamadorFuncao} >
                    <Text style={styles.text}>Enviar</Text>
                </Pressable>
            </View>   
        </View> 
    )
}
