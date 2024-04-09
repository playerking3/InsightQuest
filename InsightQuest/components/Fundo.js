import {ImageBackground, SafeAreaView, View} from "react-native";

export default function ({children}){
    return(
        <SafeAreaView>
            <ImageBackground style={{height: "100%" }} resizeMode="cover" source={require("../assets/fundo.jpg")} >
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}
