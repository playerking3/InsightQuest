import {SafeAreaView, Text} from "react-native";
import {Header} from "@react-navigation/stack";
import InputTexto from "../components/InputTexto";

export default function (){
    return(
        <SafeAreaView>
            <InputTexto texto={'Isira o conteúdo da imagem aqui'}></InputTexto>
        </SafeAreaView>
    )
}