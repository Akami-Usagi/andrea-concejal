import "./objetive.css"
import Card from "../../components/card/card"

function Objetive() {
    return <div className="objetive">
        <h1 className="objetive__title">NUESTROS OBJETIVOS</h1>
        <div className="objetive__cards">
            <Card className="about__card" imagen="/img/apoyar_image.png" letra="A" parrafo="Ayudar a fortalecer nuestra ciudad adoptando los planes y programas correctos" color="#F9AE17"/>
            <Card className="about__card" imagen="/img/brindar_image.jpg" letra="B" parrafo="Brindar un puente de comunicacion para hacer efectiva la participacion de la comunidad" color="#1A4682"/>
            <Card className="about__card" imagen="/img/control_image.png" letra="C" parrafo="Control y veeduría a la administracion municipal" color="#ED3237"/>
        </div>
    </div>
}

export default Objetive