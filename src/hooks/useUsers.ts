import { useEffect, useState } from 'react';
import { userApi } from 'apis/user';
import { UserType } from 'types/userType';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useUsers = (): [any, boolean, UserType[] | undefined] => {
  const [usersData, setUsersData] = useState<UserType[]>();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    userApi
      .getUsers<UserType>()
      .then((result) => {
        setUsersData(result);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
    return () => {
      abortCtrl.abort();
    };
  }, []);

  return [error, isLoaded, usersData];
};
