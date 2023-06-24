import "./banner.css"


function Banner() {
    return <div className="banner">
        <img src="/img/banner_coneja.webp" alt="banner" className="banner__image"/>
        <img src="/img/banner_coneja_movil.webp" alt="movilbanner" className="banner__image__movil"/>
    </div>
}

export default Banner