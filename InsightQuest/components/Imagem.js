import {Image, View} from "react-native";
import {css} from "../style/ImagemStyle";

export default function (){
    return(
        <View style={css.fundo}>
            <Image source={require('../assets/fundo.jpg')} style={{ width: 200, height: 200 }} />
        </View>
    )
}