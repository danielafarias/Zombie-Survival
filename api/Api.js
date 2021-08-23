import axios from 'axios';


const baseUrl = 'https://blue-backend-modulo4front.herokuapp.com';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
  


export const getClients = async () => {
  const response = await axios.get(baseUrl, { headers: {"Authorization" : `zombiesurvival@gmail.com`} })
      
  return response.data;
}

export const register = async(name, lastName, email, number, zip, address, address2, birthday, CPF, income) => {
return await axios({
    method: 'post',
    url: baseUrl,
    data: {
        name, 
        lastName, 
        email, 
        number, 
        zip, 
        address, 
        address2, 
        birthday, 
        CPF, 
        income
    },
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bunker@gmail.com'
    }
  });
}
