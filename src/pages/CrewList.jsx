import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Card, Title, TextInput } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import {} from './CrewDetails'
import { customFetchApi } from '../utils/customFetch'
import Loader from '../components/loaders/Loader'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { FaUserAstronaut } from 'react-icons/fa'
import rocket from '../assets/images/rocket.png'

const CrewList = () => {
   const [crewMembers, setCrewMembers] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const callApi = async () => {
      const data = await customFetchApi('crew')
      setCrewMembers(data)
      setIsLoading(false)
   }

   useEffect(() => {
      try {
         callApi()
      } catch (err) {
         console.error(err)
      }
   }, [])

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
         {isLoading ? (
            <Loader />
         ) : (
            <div
               className='container'
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
               }}
            >
               <Card className='search-card'>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                     }}
                  >
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                        }}
                     >
                        <Title
                           style={{
                              marginRight: '10px',
                           }}
                        >
                           Rechercher quelqu'un
                        </Title>
                        <FaUserAstronaut />
                     </div>

                     <TextInput
                        placeholder="Rechercher quelqu'un d'incroyable"
                        icon={RxMagnifyingGlass}
                        className='text-input'
                     />
                  </div>
                  <img src={rocket} alt='rocket' />
               </Card>
               {crewMembers.map((member) => (
                  <div className='max-w-xs mx-auto member' key={member.id}>
                     <h2>{member.name}</h2>
                     <p>Agency: {member.agency}</p>
                     <img src={member.image} alt={member.name} />
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
               ))}
            </div>
         )}
      </div>
   )
}

export default CrewList
