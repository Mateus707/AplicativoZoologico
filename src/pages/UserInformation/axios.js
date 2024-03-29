 import axios from 'axios'

  export const carregar = async (id) => {
      const dadosUser = {
          'id' : id
        };
     const axiosConfig =  {
      
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };    
      try {
        const response = await axios.post('http://localhost/bdetec/userShow',dadosUser, axiosConfig);
        return response.data

      } catch (error) {
        console.error('Erro ao criar jogador1', error );
        return false;
      }
    }

      
  export const Update = async (nome,email,telefone,senha,id) => {
    const dadosUser = {
      'nome': nome,
      'email': email,
      'senha': senha,
      'telefone': telefone,
      'id': id,
      };
   const axiosConfig =  {
    
      headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };    
    try {
      const response = await axios.post('http://localhost/bdetec/userUpdate',dadosUser, axiosConfig);
     console.log("upou kl")
     return response.data

    } catch (error) {
      console.error( error );
      return false;
    }
  }