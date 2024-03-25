import axios from "axios";

export const carregar = async (emailConfi,senhaConfi) => {
    const dadosUser = {

      'email': emailConfi,
      'senha': senhaConfi,

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