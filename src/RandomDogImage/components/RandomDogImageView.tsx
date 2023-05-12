import { useRandomDogImageViewController } from '../hooks/useRandomDogImageViewController';


const RandomDogImageView = () => {
  
  const { 
    source,
    getNewImageSource,
  } = useRandomDogImageViewController();

  return (
    <div>
      <img src={source} height={100} width={100} />
      <button onClick={getNewImageSource}>Get a random dog image!</button>
    </div>
  )
};

export {
  RandomDogImageView,
};