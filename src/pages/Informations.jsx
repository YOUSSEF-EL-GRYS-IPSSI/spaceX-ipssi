import { Card, Title, Text, Italic } from '@tremor/react'
import { useEffect, useState } from 'react'
import Loader from '../components/loaders/Loader'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaCity } from 'react-icons/fa'
import { PrimaryInfoContainer } from '../components/informations/PrimaryInfoContainer'
export const Informations = () => {
   const [isLoading, setIsLoading] = useState(true)
   const [infoData, setInfoData] = useState([])

   useEffect(() => {
      axios
         .get('https://api.spacexdata.com/v4/company')
         .then((response) => {
            setInfoData(response.data)
            setIsLoading(false)
         })
         .catch((err) => {
            console.error(err)
            toast.error('Une erreur est survenue, veuillez réessayer plus tard.')
         })
   }, [])

   return (
      <div
         style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            display: 'flex',
            width: '100%',
            padding: '20Px',
         }}
      >
         {isLoading ? (
            <Loader />
         ) : (
            <div className='informations-page-container'>
               <Title>Qui sommes-nous ?</Title>
               <br />
               <Card>
                  <Title>{infoData.summary}</Title>
                  <br />
                  <Text>
                     «You want to wake up in the morning and think the future is going to be great -
                     and that’s what being a spacefaring civilization is all about. It’s about
                     believing in the future and thinking that the future will be better than the
                     past. And I can’t think of anything more exciting than going out there and
                     being among the stars.» <Italic>-Elon Musk</Italic>
                  </Text>
               </Card>
               <PrimaryInfoContainer infoData={infoData} />
            </div>
         )}
      </div>
   )
}
