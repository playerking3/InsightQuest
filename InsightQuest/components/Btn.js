import {Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function ({escrita, funcao, navigation, page}){

    function executarAcao(){
        funcao()
    }

    return(
            <Pressable  onPress={() => executarAcao()} style={css.btn}>
                <Text style={{color:'white'}}>{escrita}</Text>
            </Pressable>
    )
}


const css = StyleSheet.create({
    btn:{
        width: '80%',
        backgroundColor: "#4065EC",
        color: "#FFFFFF",
        borderRadius: 15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:40,
    }
})