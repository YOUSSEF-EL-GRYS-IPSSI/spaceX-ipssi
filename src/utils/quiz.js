export function compareAnswers(userAnswers, quiz) {
   const results = []

   for (let question of quiz.quiz.questions) {
      // Cherchez la réponse de l'utilisateur pour cette question
      const userAnswer = userAnswers.find((answer) => answer.id === question.id)

      // Si l'utilisateur a répondu à cette question, comparez avec la réponse correcte
      if (userAnswer) {
         results.push({
            id: question.id,
            question: question.question,
            correct: userAnswer.answer === question.answer,
         })
      } else {
         // Si l'utilisateur n'a pas répondu à cette question, marquez-la comme incorrecte
         results.push({
            id: question.id,
            question: question.question,
            correct: false,
         })
      }
   }

   return results
}

export const getResult = (results) => {
   const goodAnswers = []

   results.forEach((result) => {
      if (result.correct) {
         goodAnswers.push(result)
      }
   })

   return {
      goodAnswers: goodAnswers.length,
      questionsResults: results,
   }
}

export function shuffleArray(data) {
   let array = [...data.quiz.questions] // Fait une copie du tableau original
   let currentIndex = array.length,
      temporaryValue,
      randomIndex

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
   }

   // Assign new ids
   for (let i = 0; i < array.length; i++) {
      array[i].id = i + 1
   }

   return {
      quiz: {
         type: data.quiz.type,
         questions: array,
      },
   }
}
