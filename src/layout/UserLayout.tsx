import AppNavbar from '../elements/app_navbar';

interface Route {
  name: string;
  link: string;
  childs?: Route[];
}

const routes: Route[] = [
  {
    name: 'Buttons',
    link: '/buttons',
  },
];

// eslint-disable-next-line no-undef
const UserLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppNavbar routes={routes} />
      <main>{children}</main>
    </>
  );
};

export default UserLayout;
