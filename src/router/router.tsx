import App from 'App';
import { createBrowserRouter } from 'react-router-dom';
import SearchHome from 'pages/SearchHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SearchHome />,
      },
    ],
  },
]);

export default router;
