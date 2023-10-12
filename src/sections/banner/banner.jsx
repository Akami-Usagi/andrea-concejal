import "./banner.css"


function Banner({banner, changeBanner}) {



    return <div className="banner" onClick={()=> changeBanner(!banner)}>
        <img src="/img/banner_coneja.webp" alt="banner" className="banner__image"/>
        <img src={banner ? "/img/banner_sona.webp" : "/img/banner_coneja_movil.webp"} alt="movilbanner" className="banner__image__movil"/>
    </div>
}

export default Banner