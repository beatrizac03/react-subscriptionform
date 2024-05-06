import { useState, useEffect } from 'react'

import './Form.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
function Form( {participantsList, setParticipantsList} ) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msgWarning, setMsgWarning] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setMsgWarning('');
        }, 2000); // 3000 milissegundos = 3 segundos

        return () => clearTimeout(timer);
    }, [msgWarning])

    const addParticipant = (e) => {
        e.preventDefault()
    
        if(name == "" || email == "") {
            setMsgWarning('Preencha todos os campos!')
        } else {
            setName('')
            setEmail('')
            setMsgWarning('Registrado!')
            setParticipantsList( oldList => { 
                return [...oldList, {id: Math.floor(Math.random() * 10000), name: name, email: email, isConfirmed: false}] 
            } )
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