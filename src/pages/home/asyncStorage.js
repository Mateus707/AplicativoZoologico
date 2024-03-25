import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSenhaStorage = async()=>{
    try {
        const email = await AsyncStorage.getItem('email')
        console.log('Valor recuperado:', email);
        return email !== null ? email : '';
    } catch (error) {
        console.error('Erro ao recuperar dados:', error);
        return false
    }
}
   export const getEmailStorage = async() =>{
try {
  const senha = await AsyncStorage.getItem('senha')
  console.log('Valor recuperado:', senha);
  return senha !== null ? senha : '';

} catch (error) {
    console.error('Erro ao recuperar dados:', error);
    return false;
}
   }



