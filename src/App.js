import React from 'react';
import Profile from './components/Profile/profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/statistics';
import statisticalData from './components/Statistics/statisticalData.json';

import friends from './components/FriendListItem/friends.json';
import FriendList from './components/FriendList/friendlist';

import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/transactionHistory';
import './components/container.css';

function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
