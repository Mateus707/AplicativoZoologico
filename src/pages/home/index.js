import styles from './styles';
import { View,Text,Pressable,TextInput,ImageBackground} from 'react-native';
import { useState } from 'react';
import imgB from '../../../assets/img/animais-da-selva-tropical_24640-74478.avif';
import { useNavigation } from '@react-navigation/native';

export default function App(){
    const navigation = useNavigation();

     const [value, onChangeText] = useState('safada');
    
  
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
            value={value}
            />
            

            
            </View>
            <View style={styles.boxInput}>
                <TextInput 
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
                
                    
                
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button}>
                    <Text style={styles.text} onPress={() => navigation.navigate('UserInformation')}>Enviar</Text>
                </Pressable>
            </View>
            </ImageBackground>

        </View>
    )

}
