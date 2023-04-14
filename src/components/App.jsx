import { useRoute } from 'react-router5';
import Nav from '../components/Nav.jsx';
import JsonplaceholderPhotos from '../components/JsonplaceholderPhotos.jsx';

function Main() {
  const { route } = useRoute();
  console.log('Main', route);
  switch (route?.name) {
    case 'home':
      return <h1>Home</h1>;
    case 'photos':
      return <JsonplaceholderPhotos />;
    case 'about':
      return <h1>TEST</h1>;
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