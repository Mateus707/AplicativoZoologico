import styles from './styles';
import { View,Text,Pressable,TextInput,ImageBackground,ActivityIndicator} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'
import {
    Octicons,
    Fontisto
  } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App(){
    
        const navigation = useNavigation();
        const [load,setLoad] = useState(false);
        const [nome, setNome] = useState();
        const [email, setEmail] = useState();
        const [telefone, setTelefone] = useState();
        const [senha, setSenha] = useState();

   
   
    function insert(){
      
        AsyncStorage.setItem('nome', nome)
        .then(() =>{
            console.log("Dados Armazenados com sucesso!");
        })
        .catch(error => {
            console.error("Deu bom nao meu chegado",error);
        });
        AsyncStorage.setItem('email', email)
        .then(() =>{
            console.log("Dados Armazenados com sucesso!");
        })
        .catch(error => {
            console.error("Deu bom nao meu chegado",error);
        });
        AsyncStorage.setItem('telefone', telefone)
        .then(() =>{
            console.log("Dados Armazenados com sucesso!");
        })
        .catch(error => {
            console.error("Deu bom nao meu chegado",error);
        });
        AsyncStorage.setItem('senha', senha)
        .then(() =>{
            console.log("Dados Armazenados com sucesso!");
        })
        .catch(error => {
            console.error("Deu bom nao meu chegado",error);
        });
    }
    const chamadorFuncao = () => {
        insert();
        navigation.navigate('home');
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('estou passando no useEFFECT')
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
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Cadastro</Text>
                <Text style={styles.textSubTitulo}>Para se cadastrar preencha os dados a seguir de maneira correta</Text>
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
