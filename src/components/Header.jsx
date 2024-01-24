import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-stone-900 p-5 text-stone-200  font-medium fixed w-screen z-[100]">
      <Link to={"/"} className="text-red-500 md:text-2xl">
        Netflix
      </Link>

      <div className="hidden md:flex md:flex-row md:gap-x-4 ">
        <NavLink to={"#"} className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to={"#"} className="cursor-pointer">
          TV Shows
        </NavLink>
        <NavLink to={"#"} className="cursor-pointer">
          Movies
        </NavLink>
        <NavLink to={"#"} className="cursor-pointer">
          New & Popular
        </NavLink>
        <NavLink to={"#"} className="cursor-pointer">
          My List
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
