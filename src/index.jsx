import Root from './Root.jsx';

import { createRoot, hydrateRoot } from 'react-dom/client';

const
  node = document.getElementById('react-root'),
  root = <Root />;
if (node.hasChildNodes())
  hydrateRoot(node, root);
else
  createRoot(node).render(root);