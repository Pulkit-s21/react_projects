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
    <>
      <h1>Sign in with Google Account</h1>
      <button
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
    </>
  )
}
