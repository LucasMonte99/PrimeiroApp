import React from 'react';
import './stylesComentarios.css';
import Header from '../../components/header/header';
import Banner from '../../assets/peakpx (12).jpg';
import Footer from '../../components/footer';
import Navegation from '../../components/footerNavegation/navegation';

function Comentarios(){
    
    
    return(
        <div>
            <Header />
            <img id='Banner' src={Banner} />

            <div className='texto-container'>
                 <h1 className='titulo-comentario'>“O Deus cibernético chegará para devorar suas crias"  – diz, em 2077, um morador de rua da cidade de Night City.</h1>
                    <p className='primeiro-paragrafo'>
                        A esmola no futuro não será dada arremessando uma  moeda  no  chapéu, 
                        mas  sim,  com  um  simples  apontar  do  dedo  indicador  que fará uma transferência automática e online, que cai direto na conta bancária, que por sua vez não estará mais nos aplicativos e terminais bancários,
                        mas sim, integrada vinte e quatro horas por dia em nossa mente.
                    </p>
            
                <div className='bloco-inicial'>
                    <h2 className='titulo'>O que é o Cyberpunk 2077?</h2> 
                    
                    <span>É uma reflexão sobre o descarte do corpo e sobre a eternidade da  vida,  porém, 
                         quem  serão  aqueles  que  terão  essa  oportunidade  de  habitar  perpetuamente vários corpos durante os anos?
                    </span>
                    
                        
                        <span className='segundo-paragrafo'>
                            Quem terá a capacidade tecnológica e o dinheiro necessário para ter os melhores softwares, 
                            antivírus, antihack para não ser invadido e quem terá dinheiro para ser um biochip?
                        </span>
                                
                        
                            
                                <span className='frase'>O morador de rua estava correto.</span>
                          
                </div>
            </div>
            <hr/>
            <div className='comentarios'>
                <h4>COMENTÁRIOS:</h4>
                <label> 
                    Nome:
                </label>
                <textarea rows={1} cols={25} placeholder='Digite seu nome.'></textarea>
                <button className="button-nome">Enviar Nome</button>
                <label id='comentario'>
                    Faça seu comentário:
                 </label>
                <textarea rows={4} cols={50} placeholder='Fala tu,thumba!'></textarea>
                <button className="button-comentario">Enviar Comentário</button>
            </div>
            
            
            <Footer />
            <Navegation />
        </div>
    )
};

export default Comentarios;