import { useRoute } from 'react-router5';

import Nav from '../components/Nav.jsx';

import initUsers from '../components/_users.json';
import ListUsers from './ListUsers.jsx';
import ListPosts from './ListPosts.jsx';

function Main() {
  const {route} = useRoute();
  console.log('Main',route);
  switch (route?.name) {
    case 'home':
      return <h1>Home</h1>;
    case 'users':
      return <ListUsers users={initUsers}/>;
    case 'posts':
      return <ListPosts posts={[]}/>;
    default:
      return <h1>Not Found {route.name}</h1>;
  }
}

export default function App() {
  return (
    <>
      <Nav />
      <main><Main /></main>
    </>
  );
}