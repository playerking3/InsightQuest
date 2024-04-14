import React, {createContext, useState} from "react";

const Dados = createContext()

function DadosProvider({children}){

    const [imageUri, setImageUri] = useState(null);
    const [resposta, setResposta] = useState()

    return(
        <Dados.Provider value={{imageUri, setImageUri, resposta, setResposta}}>
            {children}
        </Dados.Provider>
    );

}

export {Dados, DadosProvider}