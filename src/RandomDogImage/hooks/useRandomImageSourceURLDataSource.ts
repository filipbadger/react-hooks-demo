const useRandomImageSourceURLDataSource = () => {

    const getNewImageSourceURL = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    }

    return { getNewImageSourceURL }
}

export {
    useRandomImageSourceURLDataSource,
}