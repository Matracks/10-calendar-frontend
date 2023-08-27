import { faArrowRightFromBracket, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const NavBar = () => {
  return (
    <>
        <div className="navbar navbar-dark bg-dark mb-4 px-4">

            <span className="navbar-brand">
                <FontAwesomeIcon icon={faCalendar} />
                &nbsp;
                Matias
            </span>

            <button>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                &nbsp;
                Salir
            </button>

        </div>
    </>
  )
}
