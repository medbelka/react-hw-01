import { Profile } from "components/Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "components/FriendList/FriendList"
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory"

import user from 'components/path/to/user.json'
import data from 'components/path/to/data.json'
import friends from 'components/path/to/friends.json'
import transactions from 'components/path/to/transactions.json'
import { Container } from './App.styled'

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics 
        title="Upload stats" 
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  )
}