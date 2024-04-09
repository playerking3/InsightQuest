import {ImageBackground, SafeAreaView, View} from "react-native";

export default function (children){
    return(
        <SafeAreaView>
            <ImageBackground resizeMode="cover" source={require("../assets/fundo.jpg")} >
            </ImageBackground>
        </SafeAreaView>
    )
}
