import { useState } from 'react'

import './Form.css'

function Form( {participantsList, setParticipantsList} ) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setName('')
        setEmail('')
    }

    const addParticipant = () => {
        console.log('OIIII')
        setParticipantsList( oldList => { return [...oldList, {name: name, email: email}] } )
    }

    return (
        <form 
        onSubmit={handleSubmit}
        className="wrapperFormCont">
            <div className="titleForm">
                <p>Inscrição</p>
            </div>
            <div className="buttonsInputsCont">
                <input 
                type="text" 
                placeholder="Nome completo" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={addParticipant} >REALIZAR INSCRIÇÃO</button>
            </div>
            
        </form>
    )
}

export default Form