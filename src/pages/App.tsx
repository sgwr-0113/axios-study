import React from 'react';
import { PostLists } from 'components/PostLists';
import { UserLists } from 'components/UserLists';
import Styles from 'stylesheets/pages/App.module.scss';

export const App = () => {
  return (
    <div className={Styles['wrapper']}>
      <h1>App</h1>
      <PostLists />
      <UserLists />
    </div>
  );
};
