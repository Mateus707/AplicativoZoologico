import styles from './styles';
import { View,Text,Pressable, Image, ImageBackground} from 'react-native';

const fundo = require('../../../assets/img/Fundo.png')
const logo = require('../../../assets/img/Logo.png')

export default function App({navigation}){
    return (
        <ImageBackground 
        source={fundo}
        style={styles.imageBackground}
        resizeMode='cover'
        >
            <Image source = {logo} style = {logo}></Image>
            <View style = {styles.orgButton}>
                <Pressable style = {styles.button} onPress={()=>navigation.navigate('Login')}><Text style = {styles.textButton}>Entrar</Text></Pressable>
                <Pressable style = {styles.button} onPress={()=>navigation.navigate('register')}><Text style = {styles.textButton}>Cadastrar</Text></Pressable>
            </View>
        </ImageBackground>

    )
}
