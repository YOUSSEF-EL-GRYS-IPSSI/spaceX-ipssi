import { Bold, Button, Card, Title, ProgressBar, Icon, Divider, Text } from '@tremor/react'
import { VscDebugStart } from 'react-icons/vsc'
import { AiFillCloseSquare } from 'react-icons/ai'
import { compareAnswers, getResult } from '../../utils/quiz'
import { useEffect, useState } from 'react'

export const QuizCard = ({ data, onQuizStarted, color }) => {
   const [timeLeft, setTimeLeft] = useState(0)
   const [quizStarted, setQuizStarted] = useState(false)
   const [quizOverByTimer, setQuizOverByTimer] = useState(false)
   const [quizOverByUser, setQuizOverByUser] = useState(false)
   const [questionsAnswered, setQuestionsAnswered] = useState([])
   const [questionDisplayed, setQuestionDisplayed] = useState(1)
   const [quizResult, setQuizResult] = useState(null)
   const handleStartQuiz = () => {
      setQuizStarted(true)
      setTimeLeft(60)
      onQuizStarted(true)
   }

   console.log(color)

   const handleResetQuiz = () => {
      setQuizStarted(false)
      setTimeLeft(0)
      setQuizOverByTimer(false)
      setQuizOverByUser(false)
      setQuestionsAnswered([])
      setQuestionDisplayed(1)
      setQuizResult(null)
      onQuizStarted(false)
   }

   const handleAnswer = (questionId, answer) => {
      if (questionId === 10) {
         setQuizOverByUser(true)

         questionsAnswered.push({
            id: questionId,
            answer: answer,
         })

         const questionResult = compareAnswers(questionsAnswered, data)
         const finalResult = getResult(questionResult)

         setQuizResult(finalResult)
         setTimeLeft(0)
         console.log(finalResult)
         return
      }
      questionsAnswered.push({
         id: questionId,
         answer: answer,
      })
      setQuestionDisplayed(questionId + 1)
   }

   useEffect(() => {
      if (quizStarted) {
         if (timeLeft <= 0) {
            setQuizOverByTimer(true)
            const questionResult = compareAnswers(questionsAnswered, data)
            const finalResult = getResult(questionResult)

            setQuizResult(finalResult)
            return
         }

         const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1)
         }, 1000)

         return () => clearInterval(timerId)
      }
   }, [timeLeft])

   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
         }}
      >
         {!quizStarted ? (
            <>
               <Card className='quiz-not-started-container'>
                  <Title>
                     Votre quiz <i>{data.quiz.type}</i> va bientôt commencer
                  </Title>
                  <Title>
                     Vous avez <b>1 minute</b> pour terminer le quiz. Les résultats seront affichés
                     à la fin.
                  </Title>
                  <br />
                  <Button
                     icon={VscDebugStart}
                     onClick={() => {
                        handleStartQuiz()
                     }}
                     color={color}
                  >
                     Commencer le quiz
                  </Button>
               </Card>
            </>
         ) : (
            <>
               <Card className='quiz-started-container'>
                  <div className='quiz-top-bar'>
                     <Title>
                        Temps restant <b>{timeLeft}</b> seconde(s)
                     </Title>

                     <Icon
                        icon={AiFillCloseSquare}
                        variant='solid'
                        tooltip='Annuler le quiz'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                           handleResetQuiz()
                        }}
                     ></Icon>
                  </div>

                  <ProgressBar
                     percentageValue={(timeLeft * 100) / 60}
                     style={{
                        padding: '10Px',
                     }}
                  />
                  <Divider />
                  <div className='questions-container'>
                     <br />
                     {quizOverByUser || quizOverByTimer ? (
                        <>
                           <Title>
                              Vous avez obtenu le score de <b>{quizResult.goodAnswers} sur 10 🎉</b>
                           </Title>
                           <br />
                           {quizResult.questionsResults.map((result, index) => {
                              return (
                                 <Title>
                                    <div>
                                       Question {result.id} : {result.question}
                                    </div>

                                    <Text color={result.correct ? 'green' : 'red'}>
                                       Votre réponse était{' '}
                                       <Bold>{result.correct ? 'Correct' : 'Incorrecte'}</Bold>
                                    </Text>
                                 </Title>
                              )
                           })}
                           <br />
                           <Button
                              color='red'
                              onClick={() => {
                                 handleResetQuiz()
                              }}
                           >
                              Quitter le quiz
                           </Button>
                        </>
                     ) : (
                        <>
                           <Title
                              style={{
                                 textAlign: 'center',
                              }}
                           >
                              Répondre par <b>Vrai</b> ou <b>Faux</b>
                           </Title>
                           {data.quiz.questions.map((question, index) => {
                              return (
                                 <div key={index}>
                                    {questionDisplayed === question.id && (
                                       <Card key={question.id} className='question-card'>
                                          <Text>Question n°{question.id}</Text>
                                          <Title>{question.question}</Title>
                                          <div className='buttons-container'>
                                             <Button
                                                color='green'
                                                onClick={() => {
                                                   handleAnswer(question.id, 'Vrai')
                                                }}
                                                disabled={false}
                                             >
                                                Vrai
                                             </Button>
                                             <Button
                                                color='red'
                                                onClick={() => {
                                                   handleAnswer(question.id, 'Faux')
                                                }}
                                                disabled={false}
                                             >
                                                Faux
                                             </Button>
                                          </div>
                                       </Card>
                                    )}
                                 </div>
                              )
                           })}
                        </>
                     )}
                  </div>
               </Card>
            </>
         )}
      </div>
   )
}
