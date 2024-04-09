import {ImageBackground, SafeAreaView, Text, View} from "react-native";
import Header from "../components/Header";
import Foto from "../components/Foto";
import InputTexto from "../components/InputTexto";
import Btn from "../components/Btn";
import Imagem from "../components/Imagem";
import Fundo from "../components/Fundo";
import {css} from "../style/InicioStyle";
import * as LocalAuthentication from 'expo-local-authentication';

export default function ({navigation}){
        async function authenticateUser() {
            const { success, error } = await LocalAuthentication.authenticateAsync({
                promptMessage: "Autentique-se",
                cancelLabel: "Cancelar",
                fallbackLabel: "Use senha",
            });

            if (success) {
                navigation.navigate('Home')
            } else {
                console.log('Falha na autenticação:', error);
            }
        }

    return(
        <SafeAreaView>
            <Fundo>
                <Header></Header>
                <View style={css.btnView}>
                    <Btn escrita={'Entrar'} funcao={authenticateUser} ></Btn>
                </View>
            </Fundo>
        </SafeAreaView>
    )
}