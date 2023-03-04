import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import PageTitle from './PageTitle/PageTitle';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
        fontSize: 40,
        color: '#202020',
      }}
    >
      <PageTitle title="User profile" />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />

      <FriendsList friends={friends} />

      <TransactionHistory
        type="Type"
        amount="Amount"
        currency="Currency"
        transactions={transactions}
      />
    </div>
  );
};
