import "./banner.css"


function Banner() {
    return <div className="banner">
        <img src="/img/main_banner.png" alt="banner" className="banner__image"/>
        <img src="/img/main_banner_movil.png" alt="movilbanner" className="banner__image__movil"/>
    </div>
}

export default Banner