import React from 'react';

import Profile from './components/Profile/profile';
import Statistics from './components/Statistics/statistics';
import FriendList from './components/FriendList/friendlist';
import TransactionHistory from './components/TransactionHistory/transactionHistory';

import user from './json/user.json';
import statisticalData from './json/statisticalData.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

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
