import React, {createContext} from "react";

const Dados = createContext()

function DadosProvider({children}){

    const [imageUri, setImageUri] = React.useState(null);
    const [image, setImage] = React.useState(null);

    return(
        <Dados.Provider value={{imageUri, setImageUri}}>
            {children}
        </Dados.Provider>
    );

}

export {Dados, DadosProvider}