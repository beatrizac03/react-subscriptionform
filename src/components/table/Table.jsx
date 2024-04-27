import './Table.css'

function Table( {participants} ) {
    let obj = participants
    obj.forEach(obj => {
        let each = document.createElement('div')
        each.innerHTML = `${obj.name} + ${obj.email}`
        console.log(each)
    })

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
            </div>
        </div>
    )
}

export default Table