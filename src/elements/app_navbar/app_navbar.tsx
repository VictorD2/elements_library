import Link from "next/link";
import Image from "next/image";

// Img
import logo from "../../img/logo.svg";

// Props
interface Props {
  fixed?: boolean;
  routes?: Route[];
}

interface Route {
  name: string;
  link: string;
  childs?: Route[];
}

export const AppNavbar = ({ fixed = false, routes = [] }: Props) => {
  return (
    <header className={`flex flex-row gap-10 justify-start items-center w-full bg-gray-800 ${fixed ? "fixed" : ""}`}>
      <Link className="w-2/6 h-full flex flex-row items-center" href="/">
        <div className="flex flex-row justify-center items-center poin">
          <Image src={logo} alt="React Logo" width={120} height={150} />
          <h1 className="font-semibold text-2xl uppercase text-white">Elements Library</h1>
        </div>
      </Link>
      <nav className="relative w-5/6 flex flex-row items-center py-4 m-0">
        <ul className="h-full w-full flex flex-wrap gap-4 items-center text-white p-0 m-0">
          {routes.map((item, i) => {
            return <NavBarItem link={item.link} name={item.name} key={i} childs={item.childs} />;
          })}
        </ul>
      </nav>
    </header>
  );
};

const NavBarItem = ({ name, link, childs }: Route) => {
  return (
    <Link href={link} className="h-full flex items-center">
      {name}
    </Link>
  );
};
