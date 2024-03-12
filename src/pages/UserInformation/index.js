
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
            <View style={styles.boxText}>
                <Text style={styles.text}>Bruno</Text>
                <Text style={styles.text}>Brunogeanini95@gmail.com</Text>
                <Text style={styles.text}>(11) 982647313</Text>
                <Text style={styles.text}>19 anos</Text>
            </View>
        </View>
    )

}
