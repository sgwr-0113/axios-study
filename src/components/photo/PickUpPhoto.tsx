import React from 'react';
import { PhotoType } from 'types/photoType';
import Styles from 'stylesheets/components/PickUp.module.scss';

interface Props {
  data: PhotoType;
}

export const PickUpPhoto: React.FC<Props> = (props) => {
  const photo = props.data;
  const position: number = 42 * (photo.id - 1);

  return (
    <div style={{ marginTop: position }}>
      <h3 className={Styles['heading']}>PickUpPhoto</h3>
      <div>
        <div>
          <h4>title</h4>
          <p>{photo.title}</p>
        </div>
        <div>
          <h4>url</h4>
          <p>{photo.url}</p>
        </div>
        <div>
          <h4>thumbnailUrl</h4>
          <p>{photo.thumbnailUrl}</p>
        </div>
      </div>
    </div>
  );
};
