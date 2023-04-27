import "./objetive.css"
import Card from "../../components/card/card"

function Objetive() {
    return <div className="objetive">
        <h1 className="objetive__title">NUESTROS OBJETIVOS</h1>
        <div className="objetive__cards">
            <Card className="about__card" imagen="/img/apoyar_image.png" letra="A" parrafo="Ayudar a fortalecer nuestra ciudad" color="#F9AE17"/>
            <Card className="about__card" imagen="/img/brindar_image.png" letra="B" parrafo="Brindar apoyo a quienes mas lo necesitan" color="#1A4682"/>
            <Card className="about__card" imagen="/img/construir_image.jpg" letra="C" parrafo="Construir un futuro para nuestros niños" color="#ED3237"/>
        </div>
    </div>
}

export default Objetive