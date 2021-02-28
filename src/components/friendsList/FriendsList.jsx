import React from 'react';
import FriendListItem from '../friendListItem/FriendListItem';

import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendlist}>
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;
