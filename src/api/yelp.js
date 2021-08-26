import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer cQE1tYV4bpDQCiO3uVTeotqkxUJEoa52YEvh9injmhhiJpiP1mgRElV0721w31CDoWy4edgva4RP59pfSWRwlgILkYSpR9dUsNC7z0L_lsaA20U6ZZhXcoRgQREiYXYx",
    },
});
