import {Image, View} from "react-native";
import {css} from "../style/ImagemStyle";
import {useContext} from "react";
import {Dados} from "../context/Dados";

export default function (props){
    const {imageUri, image} = useContext(Dados)

    return(
        <View style={css.fundo}>
            <Image blurRadius={props.blur} source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        </View>
    )
}