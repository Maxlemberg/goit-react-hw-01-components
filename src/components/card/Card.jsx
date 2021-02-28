import React from 'react';
import AboutUser from '../about/AboutUser';
import Stats from '../stats/Stats';
import Layout from '../layout/Layout';

const Card = ({ user }) => (
  <Layout>
    <AboutUser
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
    />
    <Stats stats={user.stats} />
  </Layout>
);

export default Card;
