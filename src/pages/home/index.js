import styles from './styles';
import { View,Text,Pressable, Image, ImageBackground} from 'react-native';

const fundo = require('../../../assets/img/Fundo.png')

export default function App(){
    return (
        <ImageBackground 
        source={fundo}
        style={styles.imageBackground}
        resizeMode='cover'
        >
            
        </ImageBackground>

    )
}
