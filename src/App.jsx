import './App.css'
import Table from './components/table/Table'
import Form from './components/form/Form'

import { useState } from 'react'

const participants = []

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function registerIntoTable() {
      setEmail('')
      setName('')

      participants.push( {name: name, email: email})
  }


  return (
    <>
      <Form name={name} setName={setName} email={email} setEmail={setEmail} registerIntoTable={registerIntoTable}/>
      <Table participants={participants}/>
    </>
  )
}

export default App
