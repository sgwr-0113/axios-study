import React, { useEffect, useState } from 'react';
import { usePosts } from 'hooks/usePosts';
import Styles from 'stylesheets/components/Lists.module.scss';
import { PickUpPost } from './PickUpPost';

export const PostLists = () => {
  const [errPosts, isLoadedPosts, postsData] = usePosts();
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    if (postsData) console.log('posts取得完了');
  }, [isLoadedPosts]);

  if (!isLoadedPosts) {
    return <p>リストをロード中・・・</p>;
  }
  if (errPosts) {
    return <p>リストを取得できませんでした</p>;
  }

  return (
    <>
      <div className={Styles['container']}>
        <ul className={Styles['lists']}>
          {postsData?.map((post, i) => (
            <li className={Styles['list']} key={i} onClick={() => setSelectedId(i + 1)}>
              {post.title}
            </li>
          ))}
        </ul>
        <div className={Styles['pickup']}>
          <PickUpPost id={selectedId} />
        </div>
      </div>
    </>
  );
};
