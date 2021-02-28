import React from 'react';

import Card from './card/Card';
import Statistics from './statistics/Statistics';
import FriendList from './friendsList/FriendsList';
import TransactionHistory from './transActions/TransActions';

import statisticalData from '../statistical-data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';

const App = ({ user }) => (
  <>
    <Card user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </>
);

export default App;
