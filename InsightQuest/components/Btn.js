import {Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function (props, {navigation}){

    const [escrita, setEscrita] = useState("")

    return(
        <View>
            <Pressable  onPress={() => navigation.navigate("Home")}>
                <Text>{props.escrita}</Text>
            </Pressable>
        </View>
    )
}


const css = StyleSheet.create({
    btn:{
        width: "80%",
        backgroundColor: "#4065EC",
        color: "#FFFFFF",
        borderRadius: 15
    }
})