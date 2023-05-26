import { customFetchApi } from '../utils/customFetch'
import { useEffect, useState } from 'react'
import Loader from '../components/loaders/Loader'
import { BarChart, Card, Subtitle, Title, Toggle, ToggleItem } from '@tremor/react'
import { MdOutlinePriceCheck, MdRocketLaunch } from 'react-icons/md'
import { Chart } from '../components/Stats'

export const RocketsStatistiques = () => {
   const [rockets, setRockets] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const [price, setPrice] = useState([])
   const [successRate, setSuccessRate] = useState([])
   const [weightPerRocket, setWeightPerRocket] = useState([])
   const [statsToDisplay, setStatsToDisplay] = useState('price')
   const [statsClicked, setStatsClicked] = useState('price')

   const dataToDisplay = {
      price: {
         Title: 'Comparaison des prix par lancement de fusée en dollars',
         subtitle: 'Tous les prix de lancement de fusée SpaceX sont comparées ici',
         categories: 'Prix par lancement',
         data: price,
      },
      successRate: {
         Title: 'Comparaison des taux de réussite de lancement de fusée en %',
         subtitle: 'Tous les taux de réussite de lancement de fusée SpaceX sont comparées ici',
         categories: 'Taux de reussite',
         data: successRate,
      },
      weightPerRocket: {
         Title: 'Comparaison des poids de fusée en kg',
         subtitle: 'Tous les poids de fusée SpaceX sont comparées ici',
         categories: 'Poids de la fusee',
         data: weightPerRocket,
      },
   }

   const callApi = async () => {
      setIsLoading(true)
      const data = await customFetchApi(`rockets`)
      setRockets(data)
      getPrice(data)
      getSuccessRate(data)
      getWeightPerRocket(data)
      setIsLoading(false)
   }

   useEffect(() => {
      callApi()
   }, [])

   const handleChange = (value) => {
      setIsLoading(true)
      setStatsToDisplay(value)
      setIsLoading(false)
   }

   const getPrice = (rockets) => {
      const newPrice = []

      rockets.forEach((rocket) => {
         const unitPrice = {
            'name': rocket.name,
            'Prix par lancement': rocket.cost_per_launch,
         }

         newPrice.push(unitPrice)
      })

      setPrice(newPrice)
      return newPrice
   }

   const getSuccessRate = (rockets) => {
      const newSuccessRate = []

      rockets.forEach((rocket) => {
         const successRate = {
            'name': rocket.name,
            'Taux de reussite': rocket.success_rate_pct,
         }

         newSuccessRate.push(successRate)
      })

      setSuccessRate(newSuccessRate)
      return newSuccessRate
   }

   const getWeightPerRocket = (rockets) => {
      const newWeightPerRocket = []

      rockets.forEach((rocket) => {
         const weightPerRocket = {
            'name': rocket.name,
            'Poids de la fusee': rocket.mass.kg,
         }

         newWeightPerRocket.push(weightPerRocket)
      })

      setWeightPerRocket(newWeightPerRocket)
      return newWeightPerRocket
   }

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : (
            <div
               style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
               }}
               className='p-10'
            >
               <Title className='m-4 text-3xl'>Statistiques</Title>

               <Toggle
                  className='m-6'
                  defaultValue='price'
                  onValueChange={(value) => {
                     handleChange(value)
                  }}
               >
                  <ToggleItem
                     value='price'
                     text='Prix de lancement en $'
                     icon={MdOutlinePriceCheck}
                  />
                  <ToggleItem
                     value='successRate'
                     text='Succès au lancement'
                     icon={MdRocketLaunch}
                  />
                  <ToggleItem
                     value='weightPerRocket'
                     text='Poids de la fusée'
                     icon={MdOutlinePriceCheck}
                  />
               </Toggle>
               <Card
                  style={{
                     width: '90%',
                  }}
               >
                  <Chart data={dataToDisplay[statsToDisplay]} />
               </Card>
            </div>
         )}
      </>
   )
}
