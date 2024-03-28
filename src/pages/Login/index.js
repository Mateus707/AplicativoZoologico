import styles from './styles';
import { View,Text,Pressable,TextInput,Image} from 'react-native';
import { useState } from 'react';
import imgPanda from '../../../assets/img/Panda.png';
import { useNavigation } from '@react-navigation/native';
import { carregar } from './axios';
import { setEmailStorage,setSenhaStorage } from './asyncStorage';
import LoadView from '../../components/loadView';

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
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image  style={styles.img} source={imgPanda}/>
            </View>
            <View style={styles.boxTitulo}>
                <Text style={styles.textTitulo}>Login</Text>
            </View>   
            <View style={styles.boxInput}>
            <TextInput
            style={styles.input}
            onChangeText={emailConfi => setEmailConfi(emailConfi)}
            placeholder='email'
            editable = {true}
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
        </View>
    )

}
