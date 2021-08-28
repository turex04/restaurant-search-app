import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchInput) => {
        try {
            const res = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchInput,
                    location: "san jose",
                },
            });
            const businesses = res.data.businesses;
            setResults(businesses);
        } catch (e) {
            setErrorMessage("Something went wrong");
        }
    };

    // useEffect(() => {
    //     searchApi("steak");
    // }, []);

    return [results, errorMessage, searchApi];
};
