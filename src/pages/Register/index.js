import styles from './styles';
import { View,Text,Pressable,TextInput,ImageBackground,ActivityIndicator} from 'react-native';
import { useState } from 'react';
import imgB from '../../../assets/img/animais-da-selva-tropical_24640-74478.avif';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'



export default function App(){
    const navigation = useNavigation();
    const [load,setLoad] = useState(true);
     const [value, onChangeText] = useState('');

   

    
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
                <Text style={styles.textTitulo}>Cadastro</Text>
                <Text style={styles.textSubTitulo}>Para se cadastrar preencha os dados a seguir de maneira correta</Text>
            </View>
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
          
            placeholder='nome'
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            
          
                <TextInput 
                style={styles.input}

                placeholder='email'
          
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            
            
            <TextInput
            style={styles.input}
            
           placeholder='telefone'
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            
            
           
                <TextInput 
                style={styles.input}
          
                placeholder='senha'
           
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button}>
                    <Text style={styles.text} onPress={() => navigation.navigate('home')}>Enviar</Text>
                </Pressable>
            </View>
            </ImageBackground>
        </View>
    
    )

}
