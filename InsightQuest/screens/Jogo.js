import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Header} from "@react-navigation/stack";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
export default function ({navigation}){
    const css = StyleSheet.create({
        main:{
            width:'100%'
        },
        divinp:{
            gap:35,
            display:'flex',
            alignItems:"center",
            width:'100%'
        }
    })
    return(
        <SafeAreaView style={css.main}>
            <Imagem></Imagem>
            <View style={css.divinp}>
                <InputTexto texto={'Isira o conteúdo da imagem aqui'}></InputTexto>
                <Btn escrita ={'ENVIAR'} navigation={navigation}>0</Btn>
            </View>
        </SafeAreaView>
    )
}