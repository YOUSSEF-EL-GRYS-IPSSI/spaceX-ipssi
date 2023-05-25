import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Title, TextInput } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import { customFetchApi } from '../utils/customFetch'
import Loader from '../components/loaders/Loader'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { FaUserAstronaut } from 'react-icons/fa'
import rocket from '../assets/images/rocket.png'
import { debounce } from 'lodash'

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
      <div className='center-with-column'>
         {isLoading ? (
            <Loader />
         ) : (
            <div className='container center-with-colum'>
               <Card className='search-card'>
                  <div className='search-card-container'>
                     <div className='title-container'>
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
                        onChange={handleChange}
                     />
                  </div>
                  <img src={rocket} alt='rocket' />
               </Card>
               {filteredMembers && isSearch ? (
                  <>
                     {filteredMembers.length === 0 ? (
                        <>
                           <h1>Aucun membre trouvé au nom de {people}</h1>
                        </>
                     ) : (
                        <div className='container'>
                           {filteredMembers.map((member) => (
                              <div className='max-w-xs mx-auto member' key={member.id}>
                                 <h2>{member.name}</h2>
                                 <p>Agency: {member.agency}</p>
                                 <img src={member.image} alt={member.name} />

                                 <div className='block-btn'>
                                    <a
                                       href={member.wikipedia}
                                       target='_blank'
                                       rel='noopener noreferrer'
                                    >
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
                     )}
                  </>
               ) : (
                  <>
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
                  </>
               )}
            </div>
         )}
      </div>
   )
}

export default CrewList
