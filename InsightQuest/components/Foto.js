import {View, TextInput, StyleSheet} from "react-native";
import {faCameraRetro, faImages} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

export default function (props){
    const css = StyleSheet.create({
        divicon:{
            backgroundColor:'white',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:70,
            height:70
        }
    })
    return(
        <View>
            <View style={css.divicon}>
                <FontAwesomeIcon size={50} icon={faCameraRetro} />
            </View>
            <View  style={css.divicon}>
                <FontAwesomeIcon size={50} icon={faImages} />
            </View>
        </View>
    )
}