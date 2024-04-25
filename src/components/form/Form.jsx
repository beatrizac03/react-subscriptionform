import { useState } from 'react'

import './Form.css'

const participants = []

function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleNameChange (e) {
        setName(e.target.value)
    }

    function handleEmailChange (e) {
        setEmail(e.target.value)
    }

    function registerIntoTable() {
        setEmail('')
        setName('')

        participants.push( {name: name, email: email})
        console.log(participants)
    }


    return (
        <div className="wrapperFormCont">
            <div className="titleForm">
                <p>Inscrição</p>
            </div>
            <div className="buttonsInputsCont">
                <input 
                type="text" 
                placeholder="Nome completo" 
                value={name}
                onChange={handleNameChange}
                />
                <input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={handleEmailChange}
                />
                <button type="submit" onClick={registerIntoTable}>REALIZAR INSCRIÇÃO</button>
            </div>
            
        </div>
    )
}

export default Form