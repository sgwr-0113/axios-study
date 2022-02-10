import React, { useEffect } from 'react';
import { usePosts } from 'hooks/usePosts';

export const App = () => {
  const [errPosts, isLoadedPosts, postsData] = usePosts();

  useEffect(() => {
    if (postsData) console.log('hoge');
  }, [isLoadedPosts]);

  if (!isLoadedPosts) {
    console.log('loading...');
  }
  if (errPosts) {
    console.log('error');
  }
  if (postsData) {
    console.log(postsData);
  }

  return (
    <>
      <p>App</p>
      <ul>{postsData && postsData.map((post, i) => <li key={i}>{post.title}</li>)}</ul>
    </>
  );
};
