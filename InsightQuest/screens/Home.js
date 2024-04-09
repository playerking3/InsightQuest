import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import Header from "../components/Header";
import Foto from "../components/Foto";
import Imagem from "../components/Imagem";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Fundo from "../components/Fundo";
import Jogo from "./Jogo";

export default function ({navigation}){
    return(
        <SafeAreaView style={css.main}>
            <View>
                <Fundo>
                    <Header></Header>
                    <View style={{height: "80%", justifyContent: "center"}}>
                        <View>
                            <Foto></Foto>
                        </View>
                        <View style={{gap: 30}}>
                            <View>
                                <Imagem></Imagem>
                            </View>
                            <View style={css.divinp}>
                                <InputTexto texto={'Insira o conteúdo da imagem aqui'}></InputTexto>
                                <Btn escrita={'ENVIAR'} navigation={navigation} page={"Jogo"}>0</Btn>
                            </View>
                        </View>
                    </View>
                </Fundo>
            </View>
        </SafeAreaView>
    )
}


const css = StyleSheet.create({
    main:{
        width:'100%',
        justifyContent: "center"
    },
    divinp:{
        gap:35,
        display:'flex',
        alignItems:"center",
        width:'100%'
    }
})