import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import {} from './CrewDetails'
import { customFetchApi } from '../utils/customFetch'

const CrewList = () => {
   const [crewMembers, setCrewMembers] = useState([])

   const callApi = async () => {
      const data = await customFetchApi('crew')
      setCrewMembers(data)
   }

   useEffect(() => {
      const fetchCrewMembers = async () => {
         callApi()
      }

      fetchCrewMembers()
   }, [])

   return (
      <div className='container'>
         {crewMembers.map((member) => (
            <div className='max-w-xs mx-auto member' key={member.id}>
               <h2>{member.name}</h2>
               <p>Agency: {member.agency}</p>
               <img src={member.image} alt={member.name} />
               <div className='block-btn'>
                  <a href={member.wikipedia} target='_blank' rel='noopener noreferrer'>
                     <Button className='btn-wiki' icon={BsWikipedia}>
                        {' '}
                        Wikipedia
                     </Button>
                  </a>
                  <Link to={`/CrewDetail/${member.id}`}>
                     <Button>voir la personne</Button>
                  </Link>
               </div>
            </div>
         ))}
      </div>
   )
}

export default CrewList
