import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Header} from "@react-navigation/stack";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
export default function ({navigation}){
    const css = StyleSheet.create({
        divinp:{
            gap:35
        }
    })
    return(
        <SafeAreaView>
            <View style={css.divinp}>
                <InputTexto texto={'Isira o conteúdo da imagem aqui'}></InputTexto>
                <Btn escrita ={'ENVIAR'} navigation={navigation}>0</Btn>
            </View>
        </SafeAreaView>
    )
}