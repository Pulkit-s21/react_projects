/* eslint-disable no-unused-vars */
import "./App.css"
import { useState } from "react"
import { Mainmenu } from "./components/Mainmenu"
import { Quiz } from "./components/Quiz"
import { EndScreen } from "./components/EndScreen"
import { QuizContext } from "./Helper/QuizContext"

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1>Quizzer</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
