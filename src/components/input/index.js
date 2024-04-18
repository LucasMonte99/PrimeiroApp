import React from 'react';
import './styles.css';
import '../../Pages/contato/contato';

function Input(){


    return(
        <div>

            <div className='email-content'>
                <label>Email
                <input style={{display: 'block'}}  placeholder='Insira seu endereço de e-mail' />
                </label>
                <button class="button">Enviar</button>
            
            


                <div className='informativo-content'>
                    <label>Duvidas ou reclamações?
                    <textarea rows={4} cols={50} placeholder='Chore suas pitangas,thumba!'>
                    </textarea>
                    </label>
                </div>

                <button class="button">Enviar</button>
            </div>
        </div>
        
    )
}

export default Input;