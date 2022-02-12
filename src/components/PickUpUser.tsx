import React from 'react';
import { UserType } from 'types/userType';
import Styles from 'stylesheets/components/PickUpPost.module.scss';

interface Props {
  data: UserType;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const PickUpUser: React.FC<Props> = (props) => {
  const user = props.data;
  const position: number = 42 * (user.id - 1);

  return (
    <div className={Styles['wrapper']} style={{ marginTop: position }}>
      <h3>PickUpUser</h3>
      <div>
        <div>
          <h4>name</h4>
          <p>{user.name}</p>
        </div>
        <div>
          <h4>email</h4>
          <p>{user.email}</p>
        </div>
        <div>
          <h4>company</h4>
          {(Object.keys(user.company) as (keyof Company)[]).map((key) => (
            <div key={key}>
              <p>
                <b>{key}: </b>
                {user.company[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
