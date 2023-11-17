import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {

    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=dh5IC0j1OQjg3hkp4HTQ6pD0Y7kfW8FT&tag=&rating=g`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=dh5IC0j1OQjg3hkp4HTQ6pD0Y7kfW8FT&tag=${tag}`;
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const { data } = await axios.get(tag ? randomMemeUrl : tagMemeUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData };
}

export default useGif;