import React, { useEffect, useState } from 'react';
import { usePosts } from 'hooks/usePosts';
import Styles from 'stylesheets/components/PostLists.module.scss';
import { PickUpPost } from './PickUpPost';

export const PostLists = () => {
  const [errPosts, isLoadedPosts, postsData] = usePosts();
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    if (postsData) console.log('posts取得完了');
  }, [isLoadedPosts]);

  if (!isLoadedPosts) {
    console.log('loading...');
    return <p>リストをロード中・・・</p>;
  }
  if (errPosts) {
    console.log('error');
    return <p>リストを取得できませんでした</p>;
  }
  if (postsData) {
    console.log('fetched');
  }

  return (
    <>
      <h2>Posts</h2>
      <div className={Styles['container']}>
        <ul className={Styles['lists']}>
          {postsData &&
            postsData.map((post, i) => (
              <li className={Styles['list']} key={i} onClick={() => setSelectedId(i + 1)}>
                {post.title}
              </li>
            ))}
        </ul>
        <PickUpPost id={selectedId} />
      </div>
    </>
  );
};
