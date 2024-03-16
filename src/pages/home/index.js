import styles from './styles';
import { View,Text,Pressable,TextInput,Image, ActivityIndicator} from 'react-native';
import { useState } from 'react';
import imgPanda from '../../../assets/img/Panda.png';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'

export default function App(){
    const navigation = useNavigation();
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
            <View style={styles.boxImg}>
                <Image  style={styles.img} source={imgPanda}/>
            </View>
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Login</Text>
            </View>   
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            />
            <TextInput 
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            /> 
            </View>
            <View style={styles.boxSenha}>
                <Text style={styles.textSenha} onPress={() => navigation.navigate('register')}>Esqueceu sua senha ?</Text>
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('UserInformation')}>
                    <Text style={styles.textButton}>Logar</Text>
                </Pressable>
            </View>
        </View>
    )

}
