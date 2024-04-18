import React from "react";
import './styles.css';
import FooterLogo from '../../assets/cyberpunk-2077 footer.jpg';


function Footer(){
    return(
        <div className="footer">
        <img id="FooterLogo" src={FooterLogo} />
        
        <span>Todos direitos reservados,motherfuker.© </span>
        <span>Desenvolvido Por: Monte </span>
        
        
        
        
        </div>
        
    )
}

export default Footer;