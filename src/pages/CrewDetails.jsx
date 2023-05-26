import React, { useState, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom'
import { Button } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { customFetchApi } from '../utils/customFetch'
import Loader from '../components/loaders/Loader'
import  '../css/style.css'

const CrewDetails = () => {
   const { id } = useParams()
   const [crewMember, setCrewMember] = useState(null)
   const [isLoading, setIsLoading] = useState(true)

   const callApi = async () => {
      const data = await customFetchApi(`crew/${id}`)
      setCrewMember(data)
      setIsLoading(false)
   }

   useEffect(() => {
      try {
         callApi()
      } catch (err) {
         console.error(err)
      }
   }, [id])

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
         }}
      >
         <div className='next'>
            <Link to='/Crewlist'>
               <Button icon={AiOutlineArrowLeft} className='btn-retour'>Retour</Button>
            </Link>
         </div>
         {isLoading ? (
            <Loader />
         ) : (
            <div className='max-w-xs mx-auto card'>
               <div className='name'>
                  <h2>{crewMember.name}</h2>
                  <p>Agency: {crewMember.agency}</p>
               </div>
               <img src={crewMember.image} alt={crewMember.name} />
               <a href={crewMember.wikipedia} target='_blank' rel='noopener noreferrer'>
                  <Button className='btn-wiki' icon={BsWikipedia}>
                     Wikipedia
                  </Button>
               </a>
            </div>
         )}
      </div>
   )
}

export default CrewDetails
