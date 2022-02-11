import React, { useEffect } from 'react';
import { usePosts } from 'hooks/usePosts';
import Styles from 'stylesheets/components/PostLists.module.scss';

export const PostLists = () => {
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
      <h2>Posts</h2>
      <ul className={Styles['lists']}>
        {postsData &&
          postsData.map((post, i) => (
            <li className={Styles['list']} key={i}>
              {post.title}
            </li>
          ))}
      </ul>
    </>
  );
};
