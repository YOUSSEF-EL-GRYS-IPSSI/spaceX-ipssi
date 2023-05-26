import React from 'react'
import { Link } from 'react-router-dom'
import nasa404 from '../assets/images/nasa404.jpg'
import { Button } from '@tremor/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const NotFound = () => {
   return (
      <div>
         <div className='page-404'>
            <Link to='/'>
               <Button icon={AiOutlineArrowLeft} size='md' onClick={() => console.log('clicked')}>
                  {' '}
                  Retour à la page d'accueil
               </Button>
            </Link>
         </div>
         <div className='img-404'>
            <div>
               <img src={nasa404} alt='' />
            </div>
         </div>
      </div>
   )
}

export default NotFound
