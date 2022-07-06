import AppNavbar from "../elements/app_navbar";

interface Route {
  name: string;
  link: string;
  childs?: Route[];
}

const routes = [
  {
    name: "Buttons",
    link: "/buttons",
  },
];

const UserLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppNavbar routes={routes} />
      <main>{children}</main>
    </>
  );
};

export default UserLayout;
