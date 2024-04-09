import {View, TextInput, StyleSheet, Pressable} from "react-native";
import {faCameraRetro, faImages} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {pickImage} from "../util/PickerImg";
import {useContext} from "react";
import {Dados} from "../context/Dados";

export default function (props){

    const {setImageUri} = useContext(Dados)

    return(
        <View style={css.icons}>
            <Pressable onPress={() => pickImage(setImageUri, "foto")} style={css.divicon}>
                <FontAwesomeIcon size={50} icon={faCameraRetro} />
            </Pressable>
            <Pressable onPress={() => pickImage(setImageUri)} style={css.divicon}>
                <FontAwesomeIcon size={50} icon={faImages} />
            </Pressable>
        </View>
    )
}

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