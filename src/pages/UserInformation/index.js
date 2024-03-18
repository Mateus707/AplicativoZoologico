
import styles from './styles';
import { View,Text,ActivityIndicator} from 'react-native';
import { useState } from 'react';
import {useEffect} from 'react'
 import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App(){

    const [nome, setNome] = useState();
      const [email, setEmail] = useState();
        const [telefone, setTelefone] = useState();
        const [senha, setSenha] = useState();
    
         AsyncStorage.getItem('nome')
        .then(nome => {
        if (nome !== null) {
            setNome(nome)
        console.log('Valor recuperado:', nome);
        
        } else {
        console.log('Nenhum valor encontrado para a chave especificada');
        }
        })
        .catch(error => {
        console.error('Erro ao recuperar dados:', error);
        }); 

          AsyncStorage.getItem('email')
        .then(email => {
        if (email !== null) {
            setEmail(email)
        console.log('Valor recuperado:', email);
        
        } else {
        console.log('Nenhum valor encontrado para a chave especificada');
        }
        })
        .catch(error => {
        console.error('Erro ao recuperar dados:', error);
        }); 

        AsyncStorage.getItem('telefone')
        .then(telefone => {
        if (telefone !== null) {
            setTelefone(telefone)
        console.log('Valor recuperado:', telefone);
        
        } else {
        console.log('Nenhum valor encontrado para a chave especificada');
        }
        })
        .catch(error => {
        console.error('Erro ao recuperar dados:', error);
        }); 

          AsyncStorage.getItem('senha')
        .then(senha => {
        if (senha !== null) {
            setSenha(senha)
        console.log('Valor recuperado:', senha);
        
        } else {
        console.log('Nenhum valor encontrado para a chave especificada');
        }
        })
        .catch(error => {
        console.error('Erro ao recuperar dados:', error);
        }); 
     
    
    

    
       
    const [load,setLoad] = useState(true);
    
    useEffect(() => {
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
            <View style={styles.boxText}>
                <Text style={styles.text}>{nome}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{telefone}</Text>
                <Text style={styles.text}>{senha}</Text>
            </View>
        </View>
    )

}
