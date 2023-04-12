import OneUser from './OneUser.jsx';
import FetchUser from './FetchUser.jsx';
import { useState } from 'react';


export default function ListUsers({ users: propsUsers }) {
  const [stateUsersIds, setUsers] = useState([]);
  return (<div className="user-list">
    { propsUsers.map((user,k) => <OneUser user={user} key={k}/>)}
    { stateUsersIds.map(id => <FetchUser id={id} key={id} />)}
    <button onClick={() => setUsers(old => [...old, 1 + propsUsers.length + stateUsersIds.length])} >Next User</button>
  </div>);
}