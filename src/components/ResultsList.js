import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ title, results }) {
    const navigation = useNavigation();
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Business Detail", {
                                id: item.id,
                            })
                        }
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
