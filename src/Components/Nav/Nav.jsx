import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start gap-2 ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
             
              <div className="flex items-center border  rounded-xl   p-2">
                <CiSearch className="cursor-pointer"/>
                <input className="outline-none pl-2 bg-none " type="text" placeholder="Search"/>
            </div>
            </ul>
          </div>
          <a className=" text-xl btn btn-ghost">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <div className="lg:flex items-center border bg-[#150B2B0D] rounded-xl hidden  p-2">
                <CiSearch className="cursor-pointer"/>
                <input className="outline-none pl-2 bg-transparent " type="text" placeholder="Search"/>
            </div>
            <FaRegUserCircle className="text-[#02B76C]  cursor-pointer rounded-full text-4xl"/>
        </div>
      </div>
    </>
  );
}
