import { useRandomDogImageRepository } from "./useRandomDogImageRepository";


const useRandomDogImageViewController = () => {

    const { source, getNewImageSource } = useRandomDogImageRepository();
    return { source, getNewImageSource };
}

export {
    useRandomDogImageViewController,
}