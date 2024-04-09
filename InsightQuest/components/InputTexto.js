import {SafeAreaView, Text, View, TextInput} from "react-native";

export default function (props){
    return(
            <TextInput
                placeholder={props.texto}
                value={props.value}
                style={{
                    height: 40,
                    width:'80%',
                    borderWidth: 3,
                    borderColor: "black",
                    paddingLeft:10,
                    backgroundColor:'white',
                    borderRadius: 15}}
            />
    )
}