import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            const business = response.data;
            setResult(business);
        } catch (e) {
            setErrorMessage("Something went wrong");
        }
    };

    return [result, errorMessage, searchApi];
};
