import {ImageBackground, SafeAreaView, Text, View} from "react-native";
import Header from "../components/Header";
import Foto from "../components/Foto";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
import Fundo from "../components/Fundo";

export default function (){
    return(
        <SafeAreaView>
            <Fundo>
                <Header></Header>
                <View>
                    <Foto></Foto>
                </View>
                <View>
                    <Imagem></Imagem>
                </View>
                <View>
                    <View>
                        <InputTexto></InputTexto>
                    </View>
                    <View>
                        <Btn></Btn>
                    </View>
                </View>
            </Fundo>
        </SafeAreaView>
    )
}