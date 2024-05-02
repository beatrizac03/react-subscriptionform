/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Table.css'

// eslint-disable-next-line react/prop-types
function Table( { participantsList, setParticipantsList } ) {

    // eslint-disable-next-line no-unused-vars
    const [confirmCheckInSpan, setConfirmCheckInSpan] = useState('Confirmar check-in')

    function confirmCheckIn(each) {
        const updatedParticipantsList = participantsList.map(participant => {
            if (participant.id === each.id) {
                return { ...participant, isCheckedIn: true };
            }
            return participant;
        });

        setParticipantsList(updatedParticipantsList);
    }

    return (
        <div className="wrapperTableCont">
            <div className="titleTable">
                <p>Participantes</p>
            </div>
            <div className="contTHeadTbody">
                <div className="headerTHead">
                    <div className="eachHeaderTitle participantHT">
                        <span>Participante</span>
                    </div>
                    <div className="eachHeaderTitle subscDateHT">
                        <span>Data de inscrição</span>
                    </div>
                    <div className="eachHeaderTitle checkInHT">
                        <span>Data do check-in</span>
                    </div>
                </div>
                <div className="tbodyCont w-full h-auto">
                    {participantsList.map( (each) => {
                        return (
                            <div key={each.id} 
                            className="cont-eachparticipant w-full h-16 flex border-solid pl-4 border-neutral-500 border-b-2 border-r-2 border-l-2">
                                <div className="text-eachpartic h-full flex flex-col justify-center">
                                    <p className="text-xl font-semibold text-indigo-400"> {each.name} </p>
                                    <p> {each.email}</p>
                                </div>
                                <div className="cont-subscdate flex align-center w-1/5 h-full">
                                    <p className="h-1/2">há {Math.floor(Math.random() * 60) + 1} minutos</p>
                                </div>
                                <div className="cont-checkindate w-1/5">
                                    <span value={confirmCheckInSpan} onClick={ () => confirmCheckIn(each)}>{each.isCheckedIn ? 'Confirmado' : 'Confirmar check-in'}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Table