import React from 'react';
import './styles.css';



function Button({active,name,onClick}){
    return (
        <div className='containerButton'>
        <button onClick={() => onClick(20)} className={active ? 'button' : 'disableButton'}>{name}</button>
        <span>Seus dados estão a salvo conosco</span>
        
        </div>
    )
}


export default Button;
