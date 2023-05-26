import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Title, TextInput, Bold } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import { FaUserAstronaut } from 'react-icons/fa'
import { customFetchApi } from '../utils/customFetch'
import Loader from '../components/loaders/Loader'
import { RxMagnifyingGlass } from 'react-icons/rx'
import rocket from '../assets/images/rocket.png'
import { debounce } from 'lodash'
import { CrewCard } from '../components/CrewList/CrewCard'

const CrewList = () => {
   const [crewMembers, setCrewMembers] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [people, setPeople] = useState('')
   const [filteredMembers, setFilteredMembers] = useState([])
   const debouncedSetPeople = useCallback(
      debounce((value) => setPeople(value), 1000),
      [],
   )
   const [isSearch, setIsSearch] = useState(false)

   useEffect(() => {
      return () => {
         debouncedSetPeople.cancel()
      }
   }, [])

   const handleChange = (e) => {
      debouncedSetPeople(e.target.value.toLowerCase())
   }

   const callApi = async () => {
      setIsLoading(true)
      setIsSearch(false)
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

   useEffect(() => {
      if (people) {
         setIsLoading(true)
         setIsSearch(true)
         const filterPeople = crewMembers.filter((member) =>
            member.name.toLowerCase().includes(people),
         )
         setFilteredMembers(filterPeople)
         setIsLoading(false)
      } else {
         setFilteredMembers(crewMembers)
      }
   }, [people])

   return (
      <div className='center-with-colum'>
         {isLoading ? (
            <Loader />
         ) : (
            <div
               className='container'
               style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
               }}
            >
               <Card className='search-card'>
                  <div className='search-card-container'>
                     <div className='title-container'>
                        <Title
                        className=' text-rocket'
                           style={{
                              marginRight: '10px',
                           }}
                        >
                           Rechercher un membre d'équipage
                        </Title>
                        <FaUserAstronaut />
                     </div>

                     <TextInput
                        placeholder="Rechercher quelqu'un d'incroyable..."
                        icon={RxMagnifyingGlass}
                        className='text-input'
                        onChange={handleChange}
                     />
                  </div>
                  <img id='rocket' src={rocket} alt='rocket' />
               </Card>
               {filteredMembers && isSearch ? (
                  <div>
                     {filteredMembers.length === 0 ? (
                        <>
                           <Card>
                              <Title>
                                 Aucun membre trouvé au nom de{' '}
                                 <Bold className='text-lg'> {people ? people : '???'}</Bold>
                              </Title>
                           </Card>
                        </>
                     ) : (
                        <div className='container'>
                           {filteredMembers.map((member) => (

                              <CrewCard member={member} />

                           ))}
                        </div>
                     )}
                  </div>
               ) : (
                  <>
                     <div className='container'>
                        {crewMembers.map((member) => (

                           <CrewCard member={member} />

                        ))}
                     </div>
                  </>
               )}
            </div>
         )}
      </div>
   )
}

export default CrewList
