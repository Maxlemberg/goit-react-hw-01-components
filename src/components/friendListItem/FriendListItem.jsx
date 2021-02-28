import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendItem.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={style.item} key={id}>
      {isOnline ? (
        <span className={style.isOnline}></span>
      ) : (
        <span className={style.status}></span>
      )}
      <span></span>
      <img className={style.avatar} src={avatar} alt="" />
      <p className={style.name}>{name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendListItem;
