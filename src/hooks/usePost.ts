import { useEffect, useState } from 'react';
import { postApi } from 'apis/post';
import { PostType } from 'types/postTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePost = (postId: number): [any, boolean, PostType | undefined] => {
  const [postData, setPostData] = useState<PostType>();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!postId) return undefined;
    const abortCtrl = new AbortController();
    postApi
      .getPost<PostType>(postId)
      .then((result) => {
        setPostData(result);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
    return () => {
      abortCtrl.abort();
    };
  }, [postId]);

  return [error, isLoaded, postData];
};
