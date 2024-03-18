import styles from './styles';
import { View,Text,Pressable,TextInput,Image, ActivityIndicator} from 'react-native';
import { useState } from 'react';
import imgPanda from '../../../assets/img/Panda.png';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App(){
    const navigation = useNavigation();
    
    const [load,setLoad] = useState(true);

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [emailConfi, setEmailConfi] = useState();
    const [senhaConfi, setSenhaConfi] = useState();


    if(email == undefined){
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
    
    }
    if(senha == undefined){
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
    }
   
    


    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        },1000)
       
    });

    const userLogin = () => {
        if(email && senha != undefined){
            if((senha == senhaConfi) && (email == emailConfi)){
                return navigation.navigate('UserInformation')
            }
           }
        else{
            console.log("estou aqui")
            return (<Text style={styles.boxButton}>Email ou senha incorretos</Text>)
        }
    }
 
    
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
                <Image  style={styles.img} source={imgPanda}/>
            </View>
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Login</Text>
            </View>   
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            onChangeText={emailConfi => setEmailConfi(emailConfi)}
            />
            <TextInput 
            style={styles.input}
            onChangeText={senhaConfi => setSenhaConfi(senhaConfi)}
            /> 
            </View>
            <View style={styles.boxSenha}>
                <Text style={styles.textSenha} onPress={() => navigation.navigate('register')}>Esqueceu sua senha ?</Text>
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button} onPress={userLogin}>
                    <Text style={styles.textButton}>Logar</Text>
                </Pressable>
            </View>
        </View>
    )

}
