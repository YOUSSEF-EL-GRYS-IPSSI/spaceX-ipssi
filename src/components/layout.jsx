import React, { createContext } from 'react'
import logoSpaceX from '../assets/images/SpaceX_logo_blue_Space_X-2898639104.png'
import { Icon } from '@tremor/react'
import { AiFillHome, AiFillGithub, AiFillRead } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { MdHistoryEdu, MdQuiz } from 'react-icons/md'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { Dropdown, DropdownItem } from '@tremor/react'
import { CiSquareMore } from 'react-icons/ci'
import { useLocation } from 'react-router-dom'
import { FaPeopleCarry } from 'react-icons/fa'
import { FcStatistics } from 'react-icons/fc'

export const ThemeContext = createContext()

export const Layout = ({ children }) => {
   const navigate = useNavigate()
   const location = useLocation()

   const icons = {
      histoire: MdHistoryEdu,
      Rockets: BsFillRocketTakeoffFill,
      informations: AiFillRead,
      CrewList: FaPeopleCarry,
      quiz: MdQuiz,
      statistiques: FcStatistics,
   }

   const text = {
      histoire: 'Histoire',
      Rockets: 'Fusées',
      informations: 'Informations',
      CrewList: 'Les membres',
      quiz: 'Passer un quiz',
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
                     icon={
                        icons[location.pathname.split('/')[1]]
                           ? icons[location.pathname.split('/')[1]]
                           : CiSquareMore
                     }
                     defaultValue={text[location.pathname.split('/')[1]]}
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
                        icon={FaPeopleCarry}
                        disabled={location.pathname.includes('CrewList')}
                     />
                     <DropdownItem
                        value='quiz'
                        text='Passer un quiz'
                        icon={MdQuiz}
                        disabled={location.pathname.includes('quiz')}
                     />
                     <DropdownItem
                        value='statistiques'
                        text='Statistiques fusées'
                        icon={FcStatistics}
                        disabled={location.pathname.includes('statistiques')}
                     />
                  </Dropdown>
               </div>
               <div
                  className='logo-space'
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
