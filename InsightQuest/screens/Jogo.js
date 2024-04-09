import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Header} from "@react-navigation/stack";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
import Fundo from "../components/Fundo";
export default function ({navigation}){
    const css = StyleSheet.create({
        main:{
            width:'100%',
            height:'100%',
            display:"flex",
            justifyContent:"center",
            gap:100
        },
        divinp:{
            gap:35,
            display:'flex',
            alignItems:"center",
            width:'100%'
        },
        divimg:{

        }
    })
    return(
        <Fundo>
            <View style={css.main}>
                <View style={css.divimg}>
                    <Imagem></Imagem>
                </View>
                <View style={css.divinp}>
                    <InputTexto texto={'Isira o conteúdo da imagem aqui'}></InputTexto>
                    <Btn escrita ={'ENVIAR'} navigation={navigation}>0</Btn>
                </View>
            </View>
        </Fundo>
    )
}