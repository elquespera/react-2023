import AboutUs from './AboutUs';
import Main from './Main';
import Route404 from './Route404';

export const ROUTES = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '*',
    element: <Route404 />,
  },
];
