import React from 'react';
import loadingImage from '../assets/loading.png';

const Loading = () => {
  return (
    <div className="loading-container-inline">
      <img src={loadingImage} alt="Loading" className="loading-image" />
    </div>
  );
};

export default Loading;
