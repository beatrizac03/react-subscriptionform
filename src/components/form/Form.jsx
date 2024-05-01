import { useState } from 'react'

import './Form.css'

function Form( {participantsList, setParticipantsList} ) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msgWarning, setMsgWarning] = useState('')

    const addParticipant = (e) => {
        e.preventDefault()

        console.log('OIIII')
    
        if(name == "" || email == "") {
            setMsgWarning('Preencha todos os campos!')
        } else {
            setName('')
            setEmail('')
            setMsgWarning('Registrado!')
            setParticipantsList( oldList => { return [...oldList, {name: name, email: email}] } )
        }
    }

    return (
        <form 
        onSubmit={addParticipant}
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
                type="text" 
                placeholder="E-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit"
                className="text-slate-800 font-semibold"
                >REALIZAR INSCRIÇÃO</button>
            </div>
            <div className="warn-field w-full h-6">
                <p>{msgWarning}</p>
            </div> 
        </form>
    )
}

export default Form