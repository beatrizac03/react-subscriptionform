import { useState } from 'react'

import './Form.css'

function Form( {name, setName, email, setEmail, registerIntoTable} ) {

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
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={registerIntoTable}>REALIZAR INSCRIÇÃO</button>
            </div>
            
        </div>
    )
}

export default Form