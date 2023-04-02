import Main from './Main';
import AboutUs from './AboutUs';
import AddProperty from './AddProperty';
import Route404 from './Route404';
import { RouteDetails } from '../types';

export const ROUTES: RouteDetails[] = [
  { to: '/', title: 'Home', testId: 'home-page', icon: 'home', page: Main },
  { to: '/about-us', title: 'About Us', testId: 'about-us-page', icon: 'about', page: AboutUs },
  {
    to: '/add-property',
    title: 'Add Property',
    testId: 'add-property-page',
    icon: 'add',
    page: AddProperty,
  },
  { to: '*', title: '404', page: Route404, invisible: true },
];
