import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Title, Text } from '@tremor/react'
import { CgDetailsMore } from 'react-icons/cg'
import Loader from '../components/loaders/Loader'
import { customFetchApi } from '../utils/customFetch'

const RocketList = () => {
   const [rockets, setRockets] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const callApi = async () => {
      const data = await customFetchApi('rockets')
      setRockets(data)
      setIsLoading(false)
   }

   useEffect(() => {
      callApi()
   }, [])

   return (
      <section className='container-fuse'>
         <Title className='text-2xl m-10'>Différentes versions de fusées SpaceX</Title>
         {rockets.map((rocket) => (
            <>{isLoading ? <Loader /> : <Rockets key={rocket.id} rocket={rocket} />}</>
         ))}
      </section>
   )
}

const Rockets = ({ rocket }) => {
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
      id,
   } = rocket

   return (
      <div className='container-global'>
         <Title className='rocket-card__title'>{name}</Title>
         <div className='rocket-card__info'>
            <Text className='rocket-card__detail'>Hauteur: {height.meters} m</Text>
            <Text className='rocket-card__detail'>Diamètre: {diameter.meters} m</Text>
            <Text className='rocket-card__detail'>Masse: {mass.kg} kg</Text>
            <Text className='rocket-card__detail'>Pays d'origine: {country}</Text>
            <Text className='rocket-card__detail'>Date du premier vol: {first_flight}</Text>
            <Text className='rocket-card__detail'>Entreprise associée: {company}</Text>
         </div>
         <Text className='rocket-card__description'>Description: {description}</Text>
         <div className='img-spacex'>
            {flickr_images.map((image) => (
               <img key={image} src={image} alt='Rockets' className='rocket-card__image' />
            ))}
         </div>
         <Link to={`/rocketDetails/${id}`}>
            <Button color='blue' icon={CgDetailsMore}>
               Voir les détails
            </Button>
         </Link>
      </div>
   )
}

export default RocketList
