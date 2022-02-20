import React, { useEffect } from 'react';
import { usePost } from 'hooks/usePost';
import { PostType } from 'types/postType';
import Styles from 'stylesheets/components/PickUp.module.scss';

interface Props {
  id: number;
}

export const PickUpPost: React.FC<Props> = (props) => {
  const [errPost, isLoadedPost, postData] = usePost(props.id);

  useEffect(() => {
    console.log('hoge');
    if (postData) console.log('hoge2');
  }, [isLoadedPost, props.id]);

  if (!isLoadedPost) {
    if (postData) console.log('loadingp');
    return postData ? <p>ピックアップをロード中・・・</p> : <p>ピックアップが選択されていません</p>;
  }
  if (errPost) {
    return <p>ピックアップを取得できませんでした</p>;
  }

  const position: number = 42 * (props.id - 1);

  return (
    <div style={{ marginTop: position }}>
      {postData && (
        <>
          <h3 className={Styles['heading']}>PickUpPost</h3>
          <div>
            {(Object.keys(postData) as (keyof PostType)[]).map((key) => (
              <div key={key}>
                <h4>{key}</h4>
                <p>{postData[key]}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
