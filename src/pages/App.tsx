import React from 'react';
import { PostLists } from 'components/PostLists';
import Styles from 'stylesheets/pages/App.module.scss';

export const App = () => {
  return (
    <div className={Styles['wrapper']}>
      <h1>App</h1>
      <PostLists />
    </div>
  );
};
