import { renderToString } from 'react-dom/server'
import App from './components/App.jsx';
import { RouterProvider } from 'react-router5';
import { router } from './router.mjs';


// no router.start(); !!

export default function Root() {
    return (
        renderToString(<RouterProvider router={router}>
            <App />
        </RouterProvider>)
      )

}