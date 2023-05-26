import { BarChart, Subtitle, Title } from '@tremor/react'

export const Chart = ({ data }) => {
   return (
      <>
         <Title>{data?.Title}</Title>
         <Subtitle>{data?.subtitle}</Subtitle>
         <BarChart
            className='mt-6'
            data={data?.data}
            index='name'
            categories={[data?.categories]}
            colors={['blue']}
            yAxisWidth={48}
         />
      </>
   )
}
