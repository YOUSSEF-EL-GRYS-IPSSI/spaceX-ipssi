import { Card, Title, Text, Italic } from '@tremor/react'
import { useEffect, useState } from 'react'
import Loader from '../components/loaders/Loader'
import { PrimaryInfoContainer } from '../components/informations/PrimaryInfoContainer'
import { customFetchApi } from '../utils/customFetch'
import { Team } from '../components/informations/Team'
export const Informations = () => {
   const [isLoading, setIsLoading] = useState(true)
   const [infoData, setInfoData] = useState([])

   const callApi = async () => {
      const data = await customFetchApi('company')
      setInfoData(data)
      setIsLoading(false)
   }

   useEffect(() => {
      try {
         callApi()
      } catch (err) {
         console.log(err)
      }
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
               <Title className='text-3xl'>Qui sommes-nous ?</Title>
               <br />
               <Card
                  style={{
                     margin: '5% 0',
                  }}
               >
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
               <Team infoData={infoData} />
               <PrimaryInfoContainer infoData={infoData} />
            </div>
         )}
      </div>
   )
}
