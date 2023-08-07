import { useContext } from "react"
import { QuizContext } from "../Helper/QuizContext"

export const Mainmenu = () => {
  const { setGameState } = useContext(QuizContext)
  return (
    <>
      <button
        onClick={() => {
          setGameState("quiz")
        }}
      >
        Start Quiz
      </button>
    </>
  )
}
