import styles from './styles';
import { View,Text,Pressable,TextInput,ImageBackground, ActivityIndicator} from 'react-native';
import { useState } from 'react';
import imgB from '../../../assets/img/animais-da-selva-tropical_24640-74478.avif';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'

export default function App(){
    const navigation = useNavigation();
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
    // }
    return (
        <View style={styles.container}>
          <ImageBackground source={imgB} resizeMode='cover' style={styles.imgBackground}>
            
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Login</Text>
            </View>
           
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
        
            />
            

            
            </View>
            <View style={styles.boxInput}>
                <TextInput 
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                
                />
                
                    
                
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton} onPress={() => navigation.navigate('UserInformation')}>Enviar</Text>
                </Pressable>
            </View>
            </ImageBackground>

        </View>
    )

}
