import "./footer.css";
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';

function Footer (){
    return <footer>
        
        <div className="footer">
            <div className="footer__partido">
                <a href="https://www.andreablandon.art/"><img src="/img/andrea_header_logo.svg" alt="logo" className="footer__logo"/></a>
                <div className="footer__text">
                    <h2 className="footer__title">Andrea Blandon</h2>
                    <h4 className="footer__subtitle">El ABC del Cambio!</h4>
                </div>
            </div>
            
            <div className="footer__icons">
                <a href="https://www.facebook.com/conejita71" target="blank"><BsFacebook className="footer__icon__item"/></a>
                <a href="https://www.instagram.com/usagi_sauria/" target="blank"><BsInstagram className="footer__icon__item"/></a>
                <a href="https://www.tiktok.com/@lilithusagi" target="blank"><FaTiktok className="footer__icon__item"/></a>
            </div>
        </div>
        
    </footer>
}

export default Footer