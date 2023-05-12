import { useState } from "react";
import { useRandomImageSourceURLDataSource } from "./useRandomImageSourceURLDataSource";

const useRandomDogImageRepository = () => {

    const [source, setSource] = useState("");

    const { getNewImageSourceURL } = useRandomImageSourceURLDataSource();
    
    const getNewImageSource = async () => {
        const newImageSourceURL = await getNewImageSourceURL();
        setSource(newImageSourceURL);
    }

    return { source, getNewImageSource }    
}

export {
    useRandomDogImageRepository,
}