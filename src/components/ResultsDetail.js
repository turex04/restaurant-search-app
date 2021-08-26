import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultsDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    textStyle: {
        fontWeight: "bold",
    },
});
