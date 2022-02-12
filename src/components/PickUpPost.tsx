import React, { useEffect } from 'react';
import { usePost } from 'hooks/usePost';
import { PostType } from 'types/postType';
import Styles from 'stylesheets/components/PickUpPost.module.scss';

interface Props {
  id: number;
}

export const PickUpPost: React.FC<Props> = (props) => {
  const [errPost, isLoadedPost, postData] = usePost(props.id);
  console.log(props.id);

  useEffect(() => {
    if (postData) console.log('hoge2');
  }, [isLoadedPost, props.id]);

  if (postData && !isLoadedPost) {
    console.log('loading...2');
    return <p>ピックアップをロード中・・・</p>;
  }
  if (errPost) {
    return <p>ピックアップを取得できませんでした</p>;
  }
  if (postData) {
    console.log(postData);
  }

  const position: number = 42 * (props.id - 1);

  return (
    <div className={Styles['wrapper']} style={{ marginTop: position }}>
      <h3>PickUpPost</h3>
      {postData && (
        <div>
          {(Object.keys(postData) as (keyof PostType)[]).map((key) => (
            <div key={key}>
              <h4>{key}</h4>
              <p>{postData[key]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
