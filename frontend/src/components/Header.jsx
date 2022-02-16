import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed w-full flex flex-wrap items-center justify-between bg-slate-300 h-10 px-3">
      <div className="flex flex-grow items-center">
        <div className="font-semibold uppercase tracking-widest hover:scale-105 duration-200">
            <Link to='/'>Home</Link>
        </div>
        <ul className="flex items-center flex-row list-none ml-auto space-x-8 font-semibold uppercase tracking-widest">
          <li className="hover:scale-105 duration-200">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:scale-105 duration-200">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
