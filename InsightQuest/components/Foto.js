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
            borderRadius:10,
            height:70
        },
        icons:{
            display:"flex",
            flexDirection:"row",
            marginTop:30,
            marginBottom:30,
            gap:30,
            width:'100%',
            justifyContent:"center",
            alignItems:"center"
        }
    })
    return(
        <View style={css.icons}>
            <View style={css.divicon}>
                <FontAwesomeIcon size={50} icon={faCameraRetro} />
            </View>
            <View  style={css.divicon}>
                <FontAwesomeIcon size={50} icon={faImages} />
            </View>
        </View>
    )
}