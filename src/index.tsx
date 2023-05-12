import React from 'react';
import ReactDOM from 'react-dom/client';
import { RandomDogImageView } from './RandomDogImage/components/RandomDogImageView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RandomDogImageView />
  </React.StrictMode>
);
