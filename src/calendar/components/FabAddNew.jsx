import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from "date-fns"


export const FabAddNew = () => {

    const { openDateModal } = useUiStore()
    const { setActiveEvent } =  useCalendarStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
              _id: '123',
              name: 'Matias'
            }
          })
        openDateModal()
    }

  return (
    <>
        <button 
            className="btn btn-primary fab"
            onClick={ handleClickNew }>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </>
  )
}
