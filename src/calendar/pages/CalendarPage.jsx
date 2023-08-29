import { CalendarEventBox, CalendarModal, FabAddNew, FabDelete, NavBar } from ".."

import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { localizer, getMessagesES } from "../../helpers"
import { useEffect, useState } from "react"
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks"
import { useSelector } from "react-redux"


export const CalendarPage = () => {

  const { openDateModal } = useUiStore()
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
  const { user } = useAuthStore()
  const { activeEvent } = useSelector( state => state.calendar )

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week' )

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid )

    const style = {
      backgroundColor:  isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }
  
    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    openDateModal()
  }
  
  const onSelect = ( event ) => {
    setActiveEvent(event)
  } 
  
  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event)
    setLastView(event)
  }

  useEffect(() => {
    
    startLoadingEvents()
  }, [])
  

  return (
    <>
      <NavBar></NavBar>

      <Calendar
        culture='es'
        defaultView={lastView}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal></CalendarModal>

      <FabAddNew></FabAddNew>
      {
        ( activeEvent?.user._id === user.uid )
        ? <FabDelete></FabDelete>
        : ''

      }
      
      
    </>
  )
}
