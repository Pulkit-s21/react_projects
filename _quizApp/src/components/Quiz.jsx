import { useState, useContext } from "react"
import { QuizContext } from "../Helper/QuizContext"
import { QuizQuestions } from "../Helper/QuizQuestions"

export const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  const { score, setScore, setGameState } = useContext(QuizContext)

  const nextQuestion = () => {
    if (QuizQuestions[currQuestion].answer == optionChosen) {
      setScore(score + 1)
    }
    setCurrQuestion(currQuestion + 1)
  }

  const finishQuiz = () => {
    if (QuizQuestions[currQuestion].answer == optionChosen) {
      setScore(score + 1)
    }
    setGameState("end")
  }
  return (
    <div className="flex flex-col gap-4 bg-orange-400 p-12 max-w-xl rounded-3xl">
      <p className="text-4xl">{QuizQuestions[currQuestion].prompt}</p>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="ansBtn"
          onClick={() => {
            setOptionChosen("A")
          }}
        >
          {QuizQuestions[currQuestion].optionA}
        </button>
        <button
          className="ansBtn"
          onClick={() => {
            setOptionChosen("B")
          }}
        >
          {QuizQuestions[currQuestion].optionB}
        </button>
        <button
          className="ansBtn"
          onClick={() => {
            setOptionChosen("C")
          }}
        >
          {QuizQuestions[currQuestion].optionC}
        </button>
        <button
          className="ansBtn"
          onClick={() => {
            setOptionChosen("D")
          }}
        >
          {QuizQuestions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == QuizQuestions.length - 1 ? (
        <button className="text-xl bg-white text-black" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="text-xl bg-white text-black" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  )
}
