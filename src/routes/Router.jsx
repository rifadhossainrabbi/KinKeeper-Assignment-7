import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import TimeLine from '../pages/timeLinePage/TimeLine';
import StatsPage from '../pages/statsPage/StatsPage';
import HomePage from '../pages/homePage/HomePage';
import DetailPage from '../pages/detailPage/DetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/timeline',
        element: <TimeLine />,
      },
      {
        path: '/stats',
        element: <StatsPage />,
      },
      {
        path: '/friend/:id',
        element: <DetailPage/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
