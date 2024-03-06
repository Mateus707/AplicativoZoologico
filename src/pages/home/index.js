import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { View,Text,Pressable,TextInput} from 'react-native';
import { useState } from 'react';
export default function App(){
     const [value, onChangeText] = useState('safada');
    
  
    return (
        <View style={styles.container}>
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Login</Text>
            </View>
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            editable
            multiline
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
        </View>
    )

}
