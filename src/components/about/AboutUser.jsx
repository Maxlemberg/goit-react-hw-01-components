import React from 'react';
import PropTypes from 'prop-types';
import style from './AboutUser.module.css';

const AboutUser = ({ name, tag, location, avatar }) => (
  <div className={style.description}>
    <img src={avatar} alt="Аватар пользователя" className={style.img} />
    <p className={style.name}>{name}</p>
    <p className={style.text}>{tag}</p>
    <p className={style.text}>{location}</p>
  </div>
);

AboutUser.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

AboutUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default AboutUser;
