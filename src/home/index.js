import React from "react";
import Header from "../components/header/header";
import './styles.css';
import Banner from '../assets/peakpx (8).jpg';
import Video from '../assets/Cyberpunk 2077.mp4';
import Cards from "../components/cards";
import Footer from "../components/footer";
import Navegation from "../components/footerNavegation/navegation";



function Home(){



    return(
        <>
            <Header/> 
            <img id="banner" src={Banner} />
            <div id="trailler-container">
                <div className="content">
                 <video controls className="trailler">
                    <source src={Video}/>
                    Seu navegador não pussui suporte para exibir este vídeos.
                 </video>
                
                    <div id="sinopse">
                        <p className="description">
                            A trama segue a luta de V enquanto tenta lidar com um misterioso implante cibernético que ameaça
                            substituir seu corpo com a personalidade e as memórias de uma celebridade falecida perceptível apenas por V.
                        </p>
                        <button className="button-inicial">Comprar Ingresso</button>
                    </div>
                </div>

                  

            </div>
            
            <Cards />
            <Footer />
            <Navegation />
        </>
        
    )
}





export default Home;