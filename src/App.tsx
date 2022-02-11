import React from 'react';
import { PostLists } from 'components/PostLists';
import Styles from 'stylesheets/App.module.scss';

export const App = () => {
  return (
    <div className={Styles['wrapper']}>
      <p>App</p>
      <PostLists />
    </div>
  );
};
