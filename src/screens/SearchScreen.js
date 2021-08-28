import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen({ navigation }) {
    const [input, setInput] = useState("");
    const [results, errorMessage, searchApi] = useSearchResults();
    // console.log(JSON.stringify(results, null, 1));

    const filterResultsByPrice = (price) => {
        return results.filter((result) => result.price === price);
    };

    return (
        <>
            <SearchBar
                input={input}
                onInputChange={(newInput) => setInput(newInput)}
                onInputSubmit={() => searchApi(input)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice("$")}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice("$$")}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice("$$$")}
                    title="Big Spender"
                />
                <ResultsList
                    results={filterResultsByPrice("$$$$")}
                    title="Mega Spender"
                />
                <ResultsList
                    results={filterResultsByPrice("$$$$$")}
                    title="Grand Spender"
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});
