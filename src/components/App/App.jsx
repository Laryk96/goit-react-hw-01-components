// Data
import user from 'data/user.json';
import statsData from 'data/statistics.json';
import friedsData from 'data/friendList.json';
import transactions from 'data/transactions.json';

// style Component
import { Container } from './App.styled';

// Components
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friedsData} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
