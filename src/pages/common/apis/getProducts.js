import axios from 'axios'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getProducts = async () => {
   try {
      const response = await axios.get(API_BASE_URL);
      return response
   } catch (error) {
      return error.response
   }
}