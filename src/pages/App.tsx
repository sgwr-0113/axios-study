import React from 'react';
import { PostLists } from 'components/post/PostLists';
import { UserLists } from 'components/user/UserLists';
import { PhotoLists } from 'components/photo/PhotoLists';
import Styles from 'stylesheets/pages/App.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const App = () => {
  return (
    <div className={Styles['wrapper']}>
      <h1>axios-study</h1>
      <Tabs>
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Users</Tab>
          <Tab>Photos</Tab>
        </TabList>

        <TabPanel>
          <PostLists />
        </TabPanel>
        <TabPanel>
          <UserLists />
        </TabPanel>
        <TabPanel>
          <PhotoLists />
        </TabPanel>
      </Tabs>
    </div>
  );
};
