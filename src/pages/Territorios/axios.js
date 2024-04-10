 import axios from 'axios'

  export const carregarTerritorios = async () => {
      
     const axiosConfig =  {
      
        headers: {
          'Accept': 'application/json',
        }
      };    
      try {
        const response = await axios.get('http://localhost/bdetec/territorio',null, axiosConfig);
        return response.data

      } catch (error) {
        console.error('Erroao retornar territorios', error );
        return false;
      }
    }

      


    export const carregarAnimais = async () => {
        
       const axiosConfig =  {
        
          headers: {
            'Accept': 'application/json',
          }
        };    
        try {
          const response = await axios.get('http://localhost/bdetec/animal',null, axiosConfig);
          return response.data
  
        } catch (error) {
          console.error('Erroao retornar animais', error );
          return false;
        }
      }
  
        
  