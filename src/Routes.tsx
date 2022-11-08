import { createBrowserRouter } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import App from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'country/:countryName',
        element: <Details />,
      },
    ],
  },
]);

export default router;
