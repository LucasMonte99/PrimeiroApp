import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContexts";



function Profile(){

const {login} = useContext(UserContext);
    
    return(
        <div>
            {login ? 'Dados do usuário.' : 'Faça login para ter acesso as informações.'}    
        </div>

    )
    
      
}

export default Profile;