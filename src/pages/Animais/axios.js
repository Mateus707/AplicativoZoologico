 import axios from 'axios'

  

    export const carregarAnimais = async (id) => {
      const dados = {
          'id' : id,
      }
       const axiosConfig =  {
      
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'

          }
        };    
        try {
          const response = await axios.post('http://localhost/bdetec/animal',dados, axiosConfig);
          return response.data
  
        } catch (error) {
          console.error('Erroao retornar animais', error );
          return false;
        }
      }
  
        
  