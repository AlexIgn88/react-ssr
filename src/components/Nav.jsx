import { ConnectedLink } from 'react-router5';

export default () =>
  <nav>
    <ConnectedLink routeName="home">Home</ConnectedLink>
    <ConnectedLink routeName="users">Users</ConnectedLink>
    <ConnectedLink routeName="posts">Posts</ConnectedLink>
  </nav>;