import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../config/firebase-config"
import { Navigate, useNavigate } from "react-router-dom"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"

export const Auth = () => {
  const { isAuth } = useGetUserInfo()
  const navigate = useNavigate()
  if (isAuth) {
    return <Navigate to="/expense-tracker" />
  }
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl tracking-wider leading-snug">Sign in with Google</h1>
      <button className="text-2xl bg-blue-600 uppercase hover:scale-105 transition-all"
        onClick={async () => {
          const result = await signInWithPopup(auth, provider)
          const authInfo = {
            userId: result.user.uid,
            name: result.user.displayName,
            profilePic: result.user.photoURL,
            isAuth: true,
          }
          localStorage.setItem("auth", JSON.stringify(authInfo))
          navigate("/expense-tracker")
        }}
      >
        Sign In
      </button>
    </div>
  )
}
