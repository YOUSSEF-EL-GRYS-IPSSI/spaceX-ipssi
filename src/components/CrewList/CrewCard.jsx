import { Button, Title } from '@tremor/react'
import { BsWikipedia } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CrewCard = ({ member }) => {
   const { id, name, agency, image, wikipedia } = member

   return (
      <div className='max-w-xs mx-auto member' key={id}>
         <Title>{name}</Title>

         <p>Agency: {agency}</p>
         <img src={image} alt={member?.name} />

         <div className='block-btn'>
            <a href={wikipedia} target='_blank' rel='noopener noreferrer'>
               <Button className='btn-wiki' icon={BsWikipedia}>
                  {' '}
                  Wikipedia
               </Button>
            </a>
            <Link to={`/CrewDetail/${id}`}>
               <Button>voir la personne</Button>
            </Link>
         </div>
      </div>
   )
}
