import Main from './Main';
import AboutUs from './AboutUs';
import AddProperty from './AddProperty';
import Route404 from './Route404';

export const ROUTES = [
  { to: '/', title: 'Home', page: Main },
  { to: '/about-us', title: 'About Us', page: AboutUs },
  { to: '/add-property', title: 'Add Property', page: AddProperty },
  { to: '*', title: '404', page: Route404, invisible: true },
];
