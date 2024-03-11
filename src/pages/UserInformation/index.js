
import styles from './styles';
import { View,Text,ActivityIndicator} from 'react-native';
import { useState } from 'react';
import {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

export default function App(){

    
     
    // const [load,setLoad] = useState(true);
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoad(false)
    //     },1000)
       
    // })
    
    // if(load){
    //     return (<ActivityIndicator style={styles.load}
    //         animating={load}
    //         color={'blue'}
    //         size={'large'}
    //         />)
    //     }
    return (
        <View style={styles.container}>
            
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Informações do Usuario</Text>
            </View>
            <View style={styles.boxText}>
                <Text style={styles.text}>nome</Text>
                <Text style={styles.text}>email</Text>
                <Text style={styles.text}>numro</Text>
                <Text style={styles.text}>senha</Text>
            </View>
        </View>
    )

}
