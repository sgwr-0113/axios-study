import React, { useEffect, useState } from 'react';
import { useUsers } from 'hooks/useUsers';
import Styles from 'stylesheets/components/PostLists.module.scss';
import { PickUpUser } from './PickUpUser';

export const UserLists = () => {
  const [errUsers, isLoadedUsers, usersData] = useUsers();
  const [selectedId, setSelectedId] = useState<number | undefined>();

  useEffect(() => {
    if (usersData) console.log('users取得完了');
  }, [isLoadedUsers]);

  if (!isLoadedUsers) {
    console.log('loading...');
    return <p>リストをロード中・・・</p>;
  }
  if (errUsers) {
    console.log('error');
    return <p>リストを取得できませんでした</p>;
  }
  if (usersData) {
    console.log('fetched');
  }

  if (!usersData) {
    return <></>;
  }

  return (
    <>
      <h2>Users</h2>
      <div className={Styles['container']}>
        <ul className={Styles['lists']}>
          {usersData.map((user, i) => (
            <li className={Styles['list']} key={i} onClick={() => setSelectedId(i + 1)}>
              {user.name}
            </li>
          ))}
        </ul>
        {selectedId && <PickUpUser data={usersData[selectedId - 1]} />}
      </div>
    </>
  );
};
