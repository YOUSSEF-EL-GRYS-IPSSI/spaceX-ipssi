import React, { createContext } from 'react'
import logoSpaceX from '../assets/images/SpaceX_logo_blue_Space_X-2898639104.png'
import { Icon, Button } from '@tremor/react'
import { AiFillHome, AiFillGithub, AiFillRead } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { MdHistoryEdu } from 'react-icons/md'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { Dropdown, DropdownItem } from '@tremor/react'
import { CiSquareMore } from 'react-icons/ci'
import { useLocation } from 'react-router-dom'

export const ThemeContext = createContext()

export const Layout = ({ children }) => {
   const navigate = useNavigate()
   const location = useLocation()

   const icons = {
      histoire: MdHistoryEdu,
      fusees: BsFillRocketTakeoffFill,
      informations: AiFillRead,
   }

   return (
      <ThemeContext.Provider value={{}}>
         <div className='layout-container'>
            <header className='shadow-md'>
               <div
                  style={{
                     display: 'flex',
                     gap: '1rem',
                     width: '33%',
                  }}
               >
                  <Dropdown
                     className='mt-2'
                     onValueChange={(value) => navigate(`/${value}`)}
                     placeholder='Voir plus'
                     style={{
                        maxWidth: '60%',
                     }}
                     icon={icons[location.pathname.split('/')[1]]}
                     defaultValue={location.pathname.split('/')[1]}
                  >
                     <DropdownItem
                        value='histoire'
                        text='Histoire'
                        icon={MdHistoryEdu}
                        disabled={location.pathname.includes('histoire')}
                     />
                     <DropdownItem
                        value='informations'
                        text='Informations'
                        icon={AiFillRead}
                        disabled={location.pathname.includes('informations')}
                     />
                     <DropdownItem
                        value='Rockets'
                        text='Fusées'
                        icon={BsFillRocketTakeoffFill}
                        disabled={location.pathname.includes('Rockets')}
                     />
                     <DropdownItem
                        value='CrewList'
                        text='Les membres'
                        icon={BsFillRocketTakeoffFill}
                        disabled={location.pathname.includes('CrewList')}
                     />
                    
                      
                  </Dropdown>
               </div>
               <div
                  style={{
                     width: '33%',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '100%',
                  }}
               >
                  <img src={logoSpaceX} alt='spaceX logo' />
               </div>
               <div className='buttons-container'>
                  <Icon
                     icon={AiFillHome}
                     size='lg'
                     onClick={() => {
                        navigate('/')
                     }}
                     style={{
                        cursor: 'pointer',
                     }}
                     tooltip='accueil'
                  />
                  <Icon
                     icon={AiFillGithub}
                     size='lg'
                     tooltip='Repo GitHub'
                     style={{
                        cursor: 'pointer',
                     }}
                  />
               </div>
            </header>

            <main>{children}</main>
            <footer></footer>
         </div>
      </ThemeContext.Provider>
   )
}
