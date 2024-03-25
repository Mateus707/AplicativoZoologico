import AsyncStorage from '@react-native-async-storage/async-storage';

export const getNameStorage = async() =>
{
    try {
        const nome = await AsyncStorage.getItem('nome');
        return nome !== null ? nome : '';
    } catch (error) {
        console.error('errou foi mlk:', error);
        return false;
    }
}

export const getEmailStorage = async() =>
{
    try {
        const email = await AsyncStorage.getItem('email');
        return email !== null ? email : '';
    } catch (error) {
        console.error('errou foi mlk:', error);
        return false;
    }
  
    
}

export const getTelefoneStorage = async() =>
{
    try {
        const telefone = await AsyncStorage.getItem('telefone');
        return telefone !== null ? telefone : '';
    } catch (error) {
        console.error('errou foi mlk:', error);
        return false;
    }
}

export const getSenhaStorage = async() =>
{
    try {
        const senha = await AsyncStorage.getItem('senha');
        return senha !== null ? senha : '';
    } catch (error) {
        console.error('errou foi mlk:', error);
        return false;
    }
}