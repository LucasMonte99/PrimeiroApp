import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Banner from '../../assets/CP-MosaicWallpaper-en.png'
import Footer from "../../components/footer/index"
import Photos from "../../components/photos";
import Navegation from "../../components/footerNavegation/navegation";



function Fotos(){
   
    return(
    <div>
        <Header />
        <img id="banner" src={Banner} />
        <p className="description">Bem vindo ao acervo de fotos de Cyberpunk 2077</p>
        <h1>MÍDIA</h1>
        <nav>
            <ul>
        
                <li>PAPEIS DE PAREDE</li>
                <li>CAPTURAS DE TELA</li>
                <li>ARTES DE CONCEITO</li>
                <li>DESENHOS DE FÃS</li>
            </ul>
        </nav>
        

        <Photos />
        <Footer />
        <Navegation />
    </div>
    )
}





export default Fotos;