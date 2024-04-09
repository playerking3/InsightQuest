import {View, TextInput} from "react-native";
import {faCameraRetro, faImages} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

export default function (props){
    return(
        <View>
            <FontAwesomeIcon icon={faCameraRetro} />
            <FontAwesomeIcon icon={faImages} />
        </View>
    )
}