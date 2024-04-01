import axios from "axios";

export const carregar = async (email,senha) => {
    const dadosUser = {

      'email': email,
      'senha': senha,

    };

   const axiosConfig = {
      headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };    

    try {
      const response = await axios.post('http://localhost/bdetec/userLogin', dadosUser, axiosConfig );
        return response.data
    } catch (error) {
      console.error('Erro ao encontrar usuario', error );
    }


  }