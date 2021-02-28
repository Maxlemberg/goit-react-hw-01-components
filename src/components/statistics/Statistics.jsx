import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistic.module.css';

const Statistics = ({ stats, title }) => {
  const arr = stats.map(({ id, label, percentage }) => {
    return (
      <li className={style.item} key={id}>
        <span className={style.label}>{label}</span>
        <span className={style.percentage}>{percentage}%</span>
      </li>
    );
  });
  return (
    <section className={style.statistics}>
      <h2 class={style.title}>{title}</h2>

      <ul className={style.statlist}>{arr}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'Stats',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
