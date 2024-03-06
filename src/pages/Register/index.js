import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { View,Text,Pressable,TextInput,ImageBackground} from 'react-native';
import { useState } from 'react';
import imgB from '../../../assets/img/animais-da-selva-tropical_24640-74478.avif';
export default function App(){
     const [value, onChangeText] = useState('');
    
  
    return (
        <View style={styles.container}>
            <ImageBackground source={imgB} resizeMode='cover' style={styles.imgBackground}>
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Cadastro</Text>
            </View>
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            placeholder='nome'
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            
            </View>
            <View style={styles.boxInput}>
                <TextInput 
                style={styles.input}
                editable
                multiline
                placeholder='email'
                numberOfLines={4}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            </View>
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            editable
            multiline
            placeholder='numero'
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            
            </View>
            <View style={styles.boxInput}>
                <TextInput 
                style={styles.input}
                editable
                multiline
                placeholder='senha'
                numberOfLines={4}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Enviar</Text>
                </Pressable>
            </View>
            </ImageBackground>
        </View>
    )

}
