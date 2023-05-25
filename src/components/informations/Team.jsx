import { Card, Title } from '@tremor/react'
import elonMusk1 from '../../assets/images/musk-weed-1536332069.jpg'
import elonMusk2 from '../../assets/images/elon-musk-reuters_0-one_one.jpg'
import elonMusk3 from '../../assets/images/elonnnn.jpeg'
import coo from '../../assets/images/coo.webp'

export const Team = ({ infoData }) => {
   return (
      <>
         <Card
            style={{
               margin: '5% 0',
            }}
         >
            <Title className='text-3xl text-center'>L'équipe</Title>
            <div
               style={{
                  display: 'flex',
                  height: 'auto',
                  justifyContent: 'space-between',
               }}
            >
               <Card className='photo-container'>
                  <Title>Fondateur : {infoData.founder}</Title>
                  <img src={elonMusk1} alt='elonMusk' />
               </Card>
               <Card className='photo-container'>
                  <Title>Directeur Général : {infoData.ceo}</Title>
                  <img src={elonMusk2} alt={infoData.ceo} />
               </Card>
               <Card className='photo-container'>
                  <Title>CTO : {infoData.cto}</Title>
                  <img src={elonMusk3} alt={infoData.cto} />
               </Card>
               <Card className='photo-container'>
                  <Title>COO : {infoData.coo}</Title>
                  <img src={coo} alt={infoData.coo} />
               </Card>
            </div>
         </Card>
      </>
   )
}
