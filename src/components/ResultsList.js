import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ title, results, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Business Detail")}
                    >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    },
});
