import { ConnectedLink } from 'react-router5';

export default () =>
  <nav>
    <ConnectedLink routeName="home">Home</ConnectedLink>
    <ConnectedLink routeName="photos">Photos</ConnectedLink>
    <ConnectedLink routeName="about">About</ConnectedLink>
  </nav>;