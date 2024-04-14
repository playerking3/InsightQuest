import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
import Fundo from "../components/Fundo";
import {useContext, useState} from "react";
import Header from "../components/Header"
import {Dados} from "../context/Dados";

export default function ({navigation}){
    const {resposta} = useContext(Dados)
    const [alternativa, setAlternativa] = useState('')
    const [vidas, setVidas] = useState(5)
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

    function conferirResposta(){
        if (alternativa === resposta){
            alert('Prabéns, você acertou')
            navigation.navigate('Home')
        }else if (vidas > 1){
            setVidas(vidas-1)
        }else{
            alert('Tente novamente')
            navigation.navigate('Home')
        }
    }

    return(
        <Fundo>
            <Header></Header>
            <View style={css.main}>
                <View style={css.divimg}>
                    <Text>Tentativas: {vidas-1}</Text>
                    <Imagem blur={vidas*20}></Imagem>
                </View>
                <View style={css.divinp}>
                    <InputTexto texto={'Isira o conteúdo da imagem aqui'} setar={setAlternativa}></InputTexto>
                    <Btn escrita ={'ENVIAR'} funcao={conferirResposta}>0</Btn>
                </View>
            </View>
        </Fundo>
    )
}