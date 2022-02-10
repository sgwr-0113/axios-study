import { useEffect, useState } from 'react';
import { JPHClient } from 'apis/JPHClient';
import { PostType } from 'types/postTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePosts = (): [any, boolean, PostType[] | undefined] => {
  const [postsData, setPostsData] = useState<PostType[]>();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    JPHClient.get('/posts')
      .then((result) => {
        setPostsData(result.data);
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

  return [error, isLoaded, postsData];
};
