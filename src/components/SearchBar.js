import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ input, onInputChange, onInputSubmit }) {
    return (
        <View style={styles.viewStyle}>
            <Ionicons style={styles.iconStyle} name="search-outline" />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={input}
                onChangeText={onInputChange}
                onEndEditing={onInputSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 10,
    },
    textInputStyle: {
        flexGrow: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 12,
    },
});
