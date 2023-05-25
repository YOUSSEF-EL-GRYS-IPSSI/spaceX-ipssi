import { Card, Text, Title, Icon } from '@tremor/react'
import { FaCity } from 'react-icons/fa'
import { IoShareSocialSharp } from 'react-icons/io5'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFlickr, FaTwitterSquare, FaSpaceShuttle } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'

export const PrimaryInfoContainer = ({ infoData }) => {
   return (
      <div
         className='primary-info-container'
         style={{
            margin: '5% 0',
         }}
      >
         <Card className='primary-info-card'>
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
                  Où sommes-nous ?
               </Title>
               <FaCity />
            </div>

            <br />
            <ul>
               <li>Adresse : {infoData?.headquarters.address}</li>
               <li>Ville : {infoData?.headquarters.city}</li>
               <li>État : {infoData?.headquarters.state}</li>
            </ul>
         </Card>
         <Card className='primary-info-card'>
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
                  Réseaux sociaux
               </Title>
               <IoShareSocialSharp />
            </div>

            <div className='icons-container'>
               <a href={infoData.links.twitter} target='_blank' rel='noreferrer'>
                  <Icon icon={AiOutlineTwitter} variant='solid' tooltip='Twitter de SpaceX'></Icon>
               </a>
               <a href={infoData.links.flickr} target='_blank' rel='noreferrer'>
                  <Icon icon={FaFlickr} variant='solid' tooltip='Flickr'></Icon>
               </a>
               <a href={infoData.links.website} target='_blank' rel='noreferrer'>
                  <Icon icon={FaTwitterSquare} variant='solid' tooltip="Twitter d'Elon Musk"></Icon>
               </a>
               <a href={infoData.links.elon_twitter} target='_blank' rel='noreferrer'>
                  <Icon icon={FaSpaceShuttle} variant='solid' tooltip='SpaceX.com'></Icon>
               </a>
            </div>
         </Card>
         <Card className='primary-info-card'>
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
                  D'autres informations
               </Title>
               <AiFillInfoCircle />
            </div>
            <Text>
               <ul>
                  <li> - Fondée en {infoData?.founded}</li>
                  <li> - Employés : {infoData?.employees}</li>
                  <li> - Valorisation : {infoData?.valuation}$</li>
                  <li> - Nombre de véhicules : {infoData?.vehicles}</li>
                  <li> - Sites de tests : {infoData?.test_sites}</li>
                  <li> - Sites de lancements : {infoData?.launch_sites}</li>
               </ul>
            </Text>
         </Card>
      </div>
   )
}
