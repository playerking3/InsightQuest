import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Header} from "@react-navigation/stack";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
import Fundo from "../components/Fundo";
import {useState} from "react";
import Foto from "../components/Foto";

export default function ({navigation}){
    const [blur,setBlur] = useState(100)
    const css = StyleSheet.create({
        main:{
            width:'100%',
            height:'100%',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:100
        },
        divinp:{
            gap:35,
            display:'flex',
            alignItems:"center",
            width:'100%'
        },
        divimg:{
            height:200,
            width:200,

        }
    })
    return(
        <Fundo>
            <View style={css.main}>
                <View style={css.divimg}>
                    <Text>Olá</Text>
                    <Imagem blur={blur} setBlur={setBlur}></Imagem>
                </View>
                <View style={css.divinp}>
                    <InputTexto texto={'Isira o conteúdo da imagem aqui'}></InputTexto>
                    <Btn escrita ={'ENVIAR'} navigation={navigation}>0</Btn>
                </View>
            </View>
        </Fundo>
    )
}