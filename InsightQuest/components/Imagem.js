import {Image, View} from "react-native";
import {css} from "../style/ImagemStyle";

export default function (props){
    return(
        <View style={css.fundo}>
            <Image blurRadius={props.blur} source={require('../assets/fundo.jpg')} style={{ width: 200, height: 200 }} />
        </View>
    )
}