import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Button } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import { customFetchApi } from '../utils/customFetch'
import Loader from '../components/loaders/Loader'

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
      <>
         {isLoading ? (
            <Loader />
         ) : (
            <div className='container'>
               <h2>{crewMember.name}</h2>
               <p>Agency: {crewMember.agency}</p>
               <img src={crewMember.image} alt={crewMember.name} />
               <a href={crewMember.wikipedia} target='_blank' rel='noopener noreferrer'>
                  <Button className='btn-wiki' icon={BsWikipedia}>
                     Wikipedia
                  </Button>
               </a>
            </div>
         )}
      </>
   )
}

export default CrewDetails
