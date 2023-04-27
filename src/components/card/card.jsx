import "./card.css"

function Card(props) {

    const {imagen, letra, parrafo, color} = props

    return <div className="card">
        <div className="card__body">
            <img src={imagen} alt="Imagen Tarjeta" className="card__image"/>
            <div className="card__foot">
                <h1 className="card__letter" style={{color: color}}>{letra}</h1>
            </div>
        </div>
        <p className="card__text">{parrafo}</p>
    </div>
}

export default Card