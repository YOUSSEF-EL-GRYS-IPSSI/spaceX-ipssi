import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Title, BarChart, Subtitle, Text } from '@tremor/react'
import { customFetchApi } from '../utils/customFetch'
import Loader from '../components/loaders/Loader'

const RocketDetails = () => {
   const { id } = useParams()
   const [rocket, setRocket] = useState(null)
   const [isLoading, setIsLoading] = useState(true)

   const callApi = async () => {
      const data = await customFetchApi(`rockets/${id}`)
      setRocket(data)
      setIsLoading(false)
   }

   useEffect(() => {
      callApi()
   }, [id])

   if (!rocket) {
      return <div>Chargement...</div>
   }

   const {
      name,
      height,
      diameter,
      mass,
      country,
      first_flight,
      company,
      description,
      flickr_images,
      cost_per_launch,
   } = rocket

   const chartData = [
      {
         label: 'Hauteur',
         value: height.meters,
      },
      {
         label: 'Diamètre',
         value: diameter.meters,
      },
      {
         label: 'Masse',
         value: mass.kg,
      },
      {
         label: 'Prix de lancement',
         value: cost_per_launch,
      },
   ]

   const dataFormatter = (number) => {
      return Intl.NumberFormat('us').format(number)
   }

   return (
      <div className='rocket-card'>
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <Title className='rocket-card__name mb-5'>{name}</Title>
               <Text className='rocket-card__description'>{description}</Text>
               <Text>
                  <strong>Hauteur :</strong> {height.meters} mètres / {height.feet} pieds
               </Text>
               <Text>
                  <strong>Diamètre :</strong> {diameter.meters} mètres / {diameter.feet} pieds
               </Text>
               <Text>
                  <strong>Masse :</strong> {mass.kg} kg / {mass.lb} lb
               </Text>
               <Text>
                  <strong>Premier vol :</strong> {first_flight}
               </Text>
               <Text>
                  <strong>Pays :</strong> {country}
               </Text>
               <Text>
                  <strong>Compagnie :</strong> {company}
               </Text>
               <Text>
                  <strong>Prix de lancement:</strong> {cost_per_launch} $
               </Text>
               <div className='img-spacex'>
                  {flickr_images.map((image) => (
                     <img key={image} src={image} alt='Rockets' className='rocket-card__image' />
                  ))}
               </div>
               <Card>
                  <Title>Rocket Details</Title>
                  <Subtitle>Comparaison de la hauteur, du diamètre et de la masse</Subtitle>
                  <BarChart
                     className='mt-6'
                     data={chartData}
                     index='label'
                     categories={['value']}
                     colors={['blue']}
                     valueFormatter={dataFormatter}
                     yAxisWidth={100}
                  />
               </Card>{' '}
            </>
         )}
      </div>
   )
}

export default RocketDetails
