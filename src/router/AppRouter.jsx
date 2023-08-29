import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore()

    useEffect(() => {

      checkAuthToken()

    }, [])
    

    if ( status === 'checking') {
      return (
        <h1>Cargando...</h1>
      )
    }

    // const authStatus = 'not-authenticated' // 'not-authenticated' 'authenticated' 'checking'

  return (
    <Routes>
        {
            (status === 'not-authenticated')
            ? (
              <>
                <Route path="/auth/*" element={ <LoginPage></LoginPage>}></Route>
                <Route path="/*" element={ <Navigate to='/auth/login'></Navigate>}></Route>
              </>
            )
            : (
              <>
                <Route path="/" element={ <CalendarPage></CalendarPage>}></Route>
                <Route path="/*" element={ <Navigate to='/'></Navigate>}></Route>
              </>
            )
        }
        
        
        
    </Routes>
  )
}
