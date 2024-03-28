import axios from 'axios'

export const carregar = async (nome,email,senha,telefone) => {
    const dadosUser = {
      'nome': nome,
      'email': email,
      'senha': senha,
      'telefone': telefone,
    };

   const axiosConfig = {
      headers: {
/*         'Accept': 'application/json',
 */        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };    

    try {
      const response = await axios.post('http://localhost/bdetec/userInsert', dadosUser, axiosConfig );
      console.log(response.data)
      return false
    } catch (error) {
      console.error('Erro ao criar jogador1', error );
      return true;
    }


  }