import { faArrowRightFromBracket, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAuthStore } from "../../hooks"


export const NavBar = () => {

  const { startLogout, user} = useAuthStore()

  return (
    <>
        <div className="navbar navbar-dark bg-dark mb-4 px-4">

            <span className="navbar-brand">
                <FontAwesomeIcon icon={faCalendar} />
                &nbsp;
                { user.name }
            </span>

            <button 
              className="btn btn-outline-danger"
              onClick={ startLogout }>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                &nbsp;
                Salir
            </button>

        </div>
    </>
  )
}
