import { ImageBackground, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import img from '../../../assets/img/1.png';
import { carregar } from './axios';

export default function Splash({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [id,setId] = useState("");

 
    useEffect(() => {
        const cache = async() => {
            await AsyncStorage.getItem('email').then(email =>{
                setEmail(email)
                
            })
            .catch(error => {
                console.error("Deu bom nao meu chegado",error);
            });
            
            
            
            await AsyncStorage.getItem('senha').then(senha => {
                setSenha(senha)
               
                
            })
             
            await AsyncStorage.getItem('id').then(id => {
                setId(id)
            })   
        }
        const carregarApi = async() =>{
            const response = await carregar(email,senha);    
    
            if(response.id){
                setTimeout(() => {
                // return navigation.navigate('UserInformation',{idUser: response.id});
                return navigation.navigate('Territorio');
        }   ,3000);
            }
        }
        
        cache();
     carregarApi();
        
        
        setTimeout(() => {
         
                navigation.navigate("home");
            
            
        }, 3000);
        
        
    })
    console.log(email, senha)
    return(



        <ImageBackground
        style={styles.imageBackground}
        source={img}/>
    );}

    const styles = StyleSheet.create({
        imageBackground: {
          flex: 1,
          resizeMode: "cover",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        },

    });