import "./objetive.css"
import Card from "../../components/card/card"

function Objetive({setObjetiveData, openModal}) {

    const ayudar = {
        "img": "/img/apoyar_image.png",
        "letra": "A",
        "parrafo": "Ayudar a fortalecer nuestra ciudad adoptando los planes y programas correctos",
        "color": "#F9AE17",
        "texto": "Ayudar a fortalecer nuestra ciudad apoyando a nuestras juntas administradoras locales y juntas de acción comunal, ya que son ellas quienes conocen de primera mano las necesidades de nuestra comunidad y son quienes nos ayudaran a encontrar soluciones que beneficien a los ciudadanos."
    };
    const brindar = {
        "img": "/img/brindar_image.jpg",
        "letra": "B",
        "parrafo": "Brindar un puente de comunicacion para hacer efectiva la participacion de la comunidad",
        "color": "#1A4682",
        "texto": "Brindar un puente de comunicación entre la ciudadanía y la administración municipal, ser ese apoyo para que su voz sea escuchada fomentando la democracia participativa."

    };
    const controlar = {
        "img": "/img/control_image.png",
        "letra": "C",
        "parrafo": "Control y veeduría a la administracion municipal",
        "color": "#ED3237",
        "texto": "Control y veeduría a la administración local es el deber de un concejal, velar por que cada decisión tomada sea en beneficio de la toda comunidad y no solo de unos pocos evaluando su impacto y haciendo ajustes de ser necesario."
    };


    return <div className="objetive">
        <h1 className="objetive__title">NUESTROS OBJETIVOS</h1>
        <div className="objetive__cards">
            <div onClick={()=> {
                setObjetiveData(ayudar)
                openModal()
            }}>
                <Card className="about__card" imagen={ayudar.img} letra={ayudar.letra} parrafo={ayudar.parrafo} color={ayudar.color}/>
            </div>
            <div onClick={()=> {
                setObjetiveData(brindar)
                openModal()
            }}>
                <Card className="about__card" imagen={brindar.img} letra={brindar.letra} parrafo={brindar.parrafo} color={brindar.color}/>
            </div>
            <div onClick={()=> {
                setObjetiveData(controlar)
                openModal()
            }}>
                <Card className="about__card" imagen={controlar.img} letra={controlar.letra} parrafo={controlar.parrafo} color={controlar.color}/>
            </div>
        </div>
    </div>
}

export default Objetive