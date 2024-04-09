import {Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function ({ page,escrita, navigation }){


    return(
        <View>
            <Pressable  onPress={() => navigation.navigate(page)} style={css.btn}>
                <Text style={{color:'white'}}>{escrita}</Text>
            </Pressable>
        </View>
    )
}


const css = StyleSheet.create({
    btn:{
        width: "80%",
        backgroundColor: "#4065EC",
        color: "#FFFFFF",
        borderRadius: 15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:40,
    }
})