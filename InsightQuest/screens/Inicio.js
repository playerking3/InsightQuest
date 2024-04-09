import {ImageBackground, SafeAreaView, Text, View} from "react-native";
import Header from "../components/Header";
import Foto from "../components/Foto";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
import Fundo from "../components/Fundo";
import {css} from "../style/InicioStyle";

export default function ({navigation}){
    return(
        <SafeAreaView>
            <Fundo>
                <Header></Header>
                <View style={css.btnView}>
                    <Btn escrita={'Entrar'} navigation={navigation} page={'Home'}></Btn>
                </View>
            </Fundo>
        </SafeAreaView>
    )
}