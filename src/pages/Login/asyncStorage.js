// import AsyncStorage from '@react-native-async-storage/async-storage';

// // export const getSenhaStorage = async()=>{
// //     try {
// //         const email = await AsyncStorage.getItem('email')
// //         console.log('Valor recuperado:', email);
// //         return email !== null ? email : '';
// //     } catch (error) {
// //         console.error('Erro ao recuperar dados:', error);
// //         return false
// //     }
// // }
// //    export const getEmailStorage = async() =>{
// // try {
// //   const senha = await AsyncStorage.getItem('senha')
// //   console.log('Valor recuperado:', senha);
// //   return senha !== null ? senha : '';

// // } catch (error) {
// //     console.error('Erro ao recuperar dados:', error);
// //     return false;
// // }
// //    }
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setNomeStorage = async(nome)=>{
        try {
         await AsyncStorage.setItem('nome', nome);
        return true
        } catch (error) {
            console.error("Deu bom nao meu chegado",error);
            return false
        }
}
export const setEmailStorage = async(email)=>{
    try {
    await AsyncStorage.setItem('email', email);
    return true
    } catch (error) {
        console.error("Deu bom nao meu chegado",error);
        return false
    }
}
export const setSenhaStorage = async(senha)=>{
    try {
     await AsyncStorage.setItem('senha', senha);
    return true
    } catch (error) {
        console.error("Deu bom nao meu chegado",error);
        return false
    }
}
export const setTelefoneStorage = async(telefone)=>{
    try {
     await AsyncStorage.setItem('telefone', telefone);
    return true
    } catch (error) {
        console.error("Deu bom nao meu chegado",error);
        return false
    }
}


