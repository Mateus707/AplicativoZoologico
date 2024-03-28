import styles from './styles';
import { View,Text,Pressable,TextInput,Image} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { carregar } from './axios';
import leao from '../../../assets/img/pngwing.com.png';
import LoadView from '../../components/loadView';
import ChamaModal from '../../components/modal';
export default function App(){
    
        const navigation = useNavigation();
        const [load,setLoad] = useState(true);
        const [modalVisible, setModalVisible] = useState(false);
        const [nome, setNome] = useState();
        const [email, setEmail] = useState();
        const [telefone, setTelefone] = useState();
        const [senha, setSenha] = useState();

    const chamadorFuncao = async() => {
       const response = await carregar(nome,email,senha,telefone);
       
       if(response){
            setModalVisible(response)
            console.log(modalVisible)
       }
       if(!response){
        navigation.navigate('Login');
       }

   }
   const closeModal = () =>{
    setModalVisible(false);
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
                <Image  style={styles.img} source={leao}/>
            </View>
            <View style={styles.boxInput}>
                <TextInput
                style={styles.input}
                placeholder='nome'
                onChangeText={(nome) => {setNome(nome)}}
                />
                     <TextInput 
                style={styles.input}
                placeholder='email'
                onChangeText={(email) => {setEmail(email)}}
                />
            <TextInput
            style={styles.input}
           placeholder='telefone'
           onChangeText={(telefone) => {setTelefone(telefone)}}
            />
            <TextInput 
                style={styles.input}
                placeholder='senha'
                secureTextEntry={true}
                onChangeText={(senha) => {setSenha(senha)}}
                />  
                {modalVisible && <ChamaModal closeModal={closeModal} />}      
            </View>
            <View style={styles.boxButton}>
                <Pressable style={styles.button} onPress={chamadorFuncao} >
                    <Text style={styles.text}>Enviar</Text>
                </Pressable>
            </View>   
        </View> 
    )
}
