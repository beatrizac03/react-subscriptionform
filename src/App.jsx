import './App.css'
import Table from './components/table/Table'
import Form from './components/form/Form'

import { useState } from 'react'

function App() {
 
  const [participantsList, setParticipantsList] = useState( () => { return [] } )

  return (
    <>
      <Form participantsList={participantsList} setParticipantsList={setParticipantsList}/>
      <Table participantsList={participantsList} setParticipantsList={setParticipantsList} />
    </>
  )
}

export default App
