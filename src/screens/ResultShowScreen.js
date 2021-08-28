import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

import useSearchResult from "../hooks/useSearchResult";

export default function ResultShowScreen({ route }) {
    const id = route.params.id;
    const [result, errorMessage, searchApi] = useSearchResult();

    useEffect(() => {
        searchApi(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={{ marginLeft: 10 }}>
                {result.rating} ratings, {result.review_count} reviews
            </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photoUrl) => photoUrl}
                renderItem={({ item }) => (
                    <Image style={styles.imageStyle} source={{ uri: item }} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 19,
        fontWeight: "bold",
        margin: 10,
    },
    imageStyle: {
        height: 200,
        width: 300,
        borderRadius: 4,
        borderColor: "lightgray",
        margin: 10,
    },
});
