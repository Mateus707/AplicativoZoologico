import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { View,Text,Pressable,TextInput} from 'react-native';
import { useState } from 'react';
export default function App(){
     const [value, onChangeText] = useState('');
    
  
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
