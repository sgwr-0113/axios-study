import React, { useEffect, useState } from 'react';
import { usePhotos } from 'hooks/usePhotos';
import Styles from 'stylesheets/components/Lists.module.scss';
import { PickUpPhoto } from './PickUpPhoto';

export const PhotoLists = () => {
  const [errPhotos, isLoadedPhotos, photosData] = usePhotos();
  const [selectedId, setSelectedId] = useState<number | undefined>();

  useEffect(() => {
    if (photosData) console.log('photos取得完了');
  }, [isLoadedPhotos]);

  if (!isLoadedPhotos) {
    return <p>リストをロード中・・・</p>;
  }
  if (!photosData || errPhotos) {
    console.log('photosDataないよ');
    return <p>リストを取得できませんでした</p>;
  }

  return (
    <>
      <p className={Styles['explanation']}>重いデータを取得</p>
      <div className={Styles['container']}>
        <ul className={Styles['lists']}>
          {photosData?.map((photo, i) => (
            <li className={Styles['list']} key={i} onClick={() => setSelectedId(i + 1)}>
              {photo.title}
            </li>
          ))}
        </ul>
        <div className={Styles['pickup']}>
          {selectedId ? <PickUpPhoto data={photosData[selectedId - 1]} /> : <p>ピックアップが選択されていません</p>}
        </div>
      </div>
    </>
  );
};
