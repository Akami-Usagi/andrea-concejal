import "./footer.css";
import {BsFacebook, BsWhatsapp, BsTwitter, BsInstagram} from 'react-icons/bs';

function Footer (){
    return <footer>
        
        <div className="footer">
            <div className="footer__partido">
                <img src="/img/logo_democrata.svg" alt="logo" className="footer__logo"/>
                <div className="footer__text">
                    <h2 className="footer__title">Partido Democrata Colombiano</h2>
                    <h4 className="footer__subtitle">Vamos Juntos</h4>
                </div>
            </div>
            <img src="/img/andrea_logo.svg" alt="logo andrea" className="andrea__logo"/>
            <div className="footer__icons">
                <a href="https://www.facebook.com/" target="blank"><BsFacebook className="footer__icon__item"/></a>
                <a href="https://www.instagram.com/" target="blank"><BsInstagram className="footer__icon__item"/></a>
                <a href="https://twitter.com/" target="blank"><BsTwitter className="footer__icon__item"/></a>
                <a href="https://www.whatsapp.com/" target="blank"><BsWhatsapp className="footer__icon__item"/></a>
            </div>
        </div>
        
    </footer>
}

export default Footer