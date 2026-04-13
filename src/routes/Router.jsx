import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import TimeLine from '../pages/timeLinePage/TimeLine';
import StatsPage from '../pages/statsPage/StatsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <h2>Homepage</h2>
      },
      {
        path: "/timeline",
        element: <TimeLine/>
      },
      {
        path: "/stats",
        element: <StatsPage/>
      },
    ],
    errorElement:<ErrorPage/>
  },
]);
