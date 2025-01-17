import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Loading Weather...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(0, 160, 163)',
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ECECEC",
    }

})