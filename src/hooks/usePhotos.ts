import { useEffect, useState } from 'react';
import { photoApi } from 'apis/photo';
import { PhotoType } from 'types/photoType';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePhotos = (): [any, boolean, PhotoType[] | undefined] => {
  const [photosData, setPhotosData] = useState<PhotoType[]>();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    photoApi
      .getPhotos<PhotoType>()
      .then((result) => {
        setPhotosData(result);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
    return () => {
      abortCtrl.abort();
    };
  }, []);

  return [error, isLoaded, photosData];
};
