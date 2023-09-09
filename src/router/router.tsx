import App from 'App';
import { createBrowserRouter } from 'react-router-dom';
import SearchHome from 'pages/SearchHome';
import { KeywordProvider } from 'context/useKeywordContext';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <KeywordProvider>
            <SearchHome />
          </KeywordProvider>
        ),
      },
    ],
  },
]);

export default router;
