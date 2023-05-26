import { Button, Card, Title, Text } from '@tremor/react'
import { createContext, useState, useSyncExternalStore } from 'react'
import { TbBeta, TbAlpha, TbOmega, TbDelta } from 'react-icons/tb'
import { QuizCard } from '../components/quiz/QuizCard'
import { quiz1, quiz2, quiz3, quiz4 } from '../utils/dataQuestions'
import { shuffleArray } from '../utils/quiz'

const quizData = {
   1: quiz1,
   2: quiz2,
   3: quiz3,
   4: quiz4,
}

export const QuizPage = () => {
   const [quizNumber, setQuizNumber] = useState(0)
   const [quizQuestion, setQuizQuestion] = useState([])
   const [quizType, setSetQuizType] = useState('')
   const [quizStarted, setQuizStarted] = useState(false)
   const [color, setColor] = useState('blue')

   const handleQuizNumber = (quizNumber, quizType) => {
      const randomQuestion = shuffleArray(quizData[quizNumber])
      setQuizQuestion(randomQuestion)
      setQuizNumber(quizNumber)
      setSetQuizType(quizType)
   }

   const handleQuizStarted = (started) => {
      setQuizStarted(started)
   }

   return (
      <div className='quizPage-container'>
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <Title className='text-3xl'>QUIIIIZ</Title>

            {/*<MdQuiz className='text-3xl icon' />*/}
         </div>

         <div className='quiz-container'>
            <Card className='card-quiz-container'>
               <Title>Choisissez votre QUIIIIZ </Title>
               <Text>Vous avez le choix entre 4 sujets différents</Text>
               <div className='buttons-container'>
                  <Button
                     className='m-5'
                     color='blue'
                     icon={TbAlpha}
                     onClick={() => {
                        setColor('blue')
                        handleQuizNumber(1, 'alpha')
                     }}
                     disabled={quizType === 'alpha' || quizStarted}
                  >
                     Quiz Alpha (Espace)
                  </Button>
                  <Button
                     className='m-5'
                     color='amber'
                     icon={TbBeta}
                     onClick={() => {
                        setColor('amber')
                        handleQuizNumber(2, 'beta')
                     }}
                     disabled={quizType === 'beta' || quizStarted}
                  >
                     Quiz Beta (Biologie)
                  </Button>
                  <Button
                     className='m-5'
                     color='emerald'
                     icon={TbOmega}
                     onClick={() => {
                        setColor('emerald')
                        handleQuizNumber(3, 'omega')
                     }}
                     disabled={quizType === 'omega' || quizStarted}
                  >
                     Quiz Omega (Histoire)
                  </Button>
                  <Button
                     className='m-5'
                     color='fuchsia'
                     icon={TbDelta}
                     onClick={() => {
                        setColor('fuchsia')
                        handleQuizNumber(4, 'delta')
                     }}
                     disabled={quizType === 'delta' || quizStarted}
                  >
                     Quiz Delta (Géographie)
                  </Button>
               </div>
            </Card>
         </div>

         {quizNumber !== 0 && (
            <QuizCard data={quizQuestion} onQuizStarted={handleQuizStarted} color={color} />
         )}
      </div>
   )
}
