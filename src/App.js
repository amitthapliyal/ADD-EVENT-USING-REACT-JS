import React, { useState } from 'react'
import './App.css'
import Modal from './component/Modal'
import Eventlist from './component/Eventlist'
import Title from './component/Title'
import EventListForm from './component/EventListForm'

export default function App() {
  const [modal, showModal] = useState(false)
  const [ShowEvent, setShowEvent] = useState(true)
  const [Event, newEvent] = useState([])
  
  const handleDelete = (n) => {
    newEvent((prevEvent) => {
      return prevEvent.filter((event) => {
        return n !== event.id;
      })
    })
  }
  const addEvent = (event) => {
    newEvent((prevEvents)=>{
return [...prevEvents,event]
    })
    showModal(false)
  }
  

  return (
    <div className='App'>
      <Title title="import React, { useState } from 'react'
import './App.css'
import Modal from './component/Modal'
import Eventlist from './component/Eventlist'
import Title from './component/Title'
import EventListForm from './component/EventListForm'

export default function App() {
  const [modal, showModal] = useState(false)
  const [ShowEvent, setShowEvent] = useState(true)
  const [Event, newEvent] = useState([])
  
  const handleDelete = (n) => {
    newEvent((prevEvent) => {
      return prevEvent.filter((event) => {
        return n !== event.id;
      })
    })
  }
  const addEvent = (event) => {
    newEvent((prevEvents)=>{
return [...prevEvents,event]
    })
    showModal(false)
  }
  

  return (
    <div className='App'>
      <Title title=" Add/Remove Events " changeColor={false} />
      {!ShowEvent &&
        <button onClick={() => setShowEvent(true)}>Show Button</button>}
      {ShowEvent &&
        <button onClick={() => setShowEvent(false)}>Hide Button</button>}

      {ShowEvent &&
        <Eventlist Event={Event} handleDelete={handleDelete} />
      }
      {modal && <Modal >
        <EventListForm addEvent={addEvent}/>
      </Modal>}
      <button onClick={() => showModal(true)}>Add Event</button>
    </div>
  )
}
" changeColor={false} />
      {!ShowEvent &&
        <button onClick={() => setShowEvent(true)}>Show Button</button>}
      {ShowEvent &&
        <button onClick={() => setShowEvent(false)}>Hide Button</button>}

      {ShowEvent &&
        <Eventlist Event={Event} handleDelete={handleDelete} />
      }
      {modal && <Modal >
        <EventListForm addEvent={addEvent}/>
      </Modal>}
      <button onClick={() => showModal(true)}>Add Event</button>
    </div>
  )
}
