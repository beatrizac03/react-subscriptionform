import './Table.css'

function Table( {participantsList, setParticipantsList} ) {

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
                    {participantsList.map( (each, index) => {
                        return (
                            <div key={index} 
                            className="cont-eachparticipant w-full h-16 flex border-solid border-red-400 border-2 pl-4">
                                <div className="text-eachpartic h-full flex flex-col justify-center w-3/5">
                                    <p className="text-xl font-semibold text-indigo-400"> {each.name} </p>
                                    <p> {each.email}</p>
                                </div>
                                <div className="cont-subscdate flex align-center w-1/5 h-full">
                                    <p className="h-1/2">há {Math.floor(Math.random() * 60) + 1} minutos</p>
                                </div>
                                <div className="cont-checkindate w-1/5">
                                    <p>Confirmar check-in</p>
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