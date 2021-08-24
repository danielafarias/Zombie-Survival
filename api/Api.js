import axios from 'axios';


const baseUrl = 'https://blue-backend-modulo4front.herokuapp.com';

export const getClients = async () => {
  const response = await axios.get(baseUrl, { headers: {"Authorization" : `zombiesurvival@gmail.com`} })
      
  return response.data;
}

export const register = async(name, lastname, email, number, zip, address1, address2, birthday, CPF, income) => {
return await axios({
    method: 'post',
    url: baseUrl,
    data: {
        name, 
        lastname, 
        email, 
        number, 
        zip, 
        address1, 
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
