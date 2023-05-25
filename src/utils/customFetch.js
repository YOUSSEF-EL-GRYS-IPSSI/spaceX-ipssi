import axios from 'axios'
import { toast } from 'react-toastify'

export const customFetchApi = async (option) => {
   try {
      const response = await axios.get(`https://api.spacexdata.com/v4/${option}`)
      return response.data
   } catch (err) {
      console.error(err)
      toast.error('Une erreur est survenue, veuillez réessayer plus tard.')
   }
}
