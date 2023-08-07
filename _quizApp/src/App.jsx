import "./App.css"
import { useState } from "react"
import { MainMenu } from "./components/MainMenu"
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
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
