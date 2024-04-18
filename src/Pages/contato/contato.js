import React from "react";
import './styles.css';
import BannerContatos from '../../assets/bannercontato.jpg';
import Header from "../../components/header/header";
import Input from "../../components/input";
import Footer from "../../components/footer";
import Navegation from "../../components/footerNavegation/navegation";

function Contato(){
    return(
        <div>
            <Header />
            <img id="bannerContatos" src={BannerContatos} />
          
            <div className="container">
                <div className="informativo">
                    <p id="descriptions">Olá,Tchum!</p>
                    <h1 className="titulo-1">TE DAMOS BOAS VINDAS AO FUTURO SOMBRIO | Cyberpunk 2077. </h1>
                    <h2 className="texto-2"> Mergulhe no universo de Cyberpunk, desde o enredo original de Cyberpunk 2077 
                    e sua emocionante expansão de suspense e espionagem Phantom Liberty até a premiada série de anime Cyberpunk: Mercenários — são inúmeras histórias para descobrir na mortal megalópole de Night City. </h2>
                    <h3 className="titulo-2">INSCREVA-SE NO BOLETIM OFICIAL DE CYBERPUNK 2077!</h3>
                    <span className="info">Fique sempre por dentro das últimas notícias e anúncios de Cyberpunk 2077.</span>

                </div>


            </div>
            <Input />
            <Footer />
            <Navegation />
        </div>
    )
}

export default Contato;