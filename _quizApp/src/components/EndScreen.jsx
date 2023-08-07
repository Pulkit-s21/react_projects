import { useContext } from "react"
import { QuizContext } from "../Helper/QuizContext"
import { QuizQuestions } from "../Helper/QuizQuestions"

export const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext)
  return (
    <div className="flex flex-col gap-4 bg-orange-400 p-12 rounded-3xl">
      <h1>
        {score} / {QuizQuestions.length}
      </h1>
      <button
        onClick={() => {
          setScore(0)
          setGameState("menu")
        }}
      >
        Restart Quiz
      </button>
    </div>
  )
}
