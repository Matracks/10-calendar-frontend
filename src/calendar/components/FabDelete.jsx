import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCalendarStore } from "../../hooks"
import { useSelector } from "react-redux"

export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } =  useCalendarStore()
    const { isDateModalOpen } = useSelector( state => state.ui )

    const handleDelete = () => {
      startDeletingEvent()
    }

  return (
    <>
        <button 
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
            style={{display: hasEventSelected && !isDateModalOpen ? '' : 'none'}}>
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
    </>
  )
}
