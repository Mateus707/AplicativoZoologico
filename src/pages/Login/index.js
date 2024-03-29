import styles from './styles';
import { View,Text,Pressable,TextInput,Image, ImageBackground} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { carregar } from './axios';
import { setEmailStorage,setSenhaStorage } from './asyncStorage';
import LoadView from '../../components/loadView';

const fundo = require('../../../assets/img/Fundo.png')
const logo = require('../../../assets/img/Logo.png')

export default function App(){
    const navigation = useNavigation();

    const [emailConfi, setEmailConfi] = useState();
    const [senhaConfi, setSenhaConfi] = useState();
    const [load,setLoad] = useState(true);

    const carregarApi = async() =>{
        const response = await carregar(emailConfi,senhaConfi);    
        await setEmailStorage(response.email)
        await setSenhaStorage(response.senha)
        if(response.id){
            return navigation.navigate('UserInformation',{idUser: response.id});
        }
    }
    const carregarDados = async() => {
        await carregarApi();
    }
    useState(() => {
        setTimeout(() => {
            
            setLoad(false)
        },1000)
    });
    if(load){
        return (<LoadView/>)
    }
    return (
        <ImageBackground source = {fundo} style={styles.imageBackground} resizeMode='cover'>
            <Image source={logo}/>
            <View style={styles.boxInput}>
                <TextInput
                style={styles.input}
                onChangeText={emailConfi => setEmailConfi(emailConfi)}
                placeholder='email'
                />
                <TextInput 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={senhaConfi => setSenhaConfi(senhaConfi)}
                placeholder='senha'
                /> 
            </View>
            <View style={styles.boxSenha}>
                <Text style={styles.textSenha} onPress={() => navigation.navigate('register')}>Esqueceu sua senha ?</Text>
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button} onPress={carregarDados}>
                    <Text style={styles.textButton}>Logar</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )

}
