import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export function Nav(props) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu */}
      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul
          className="lg:space-x-8 bg-gray-50 
        lg:bg-transparent text-lg flex flex-col
        lg:flex-row border lg:dark:text-white
         border-gray-100
         lg:border-none rounded-lg p-4"
        >
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer lg:hover:text-blue-500 lg:hover:bg-transparent rounded py-2 px-3 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart button */}
      <div
        onClick={props.onClickShoppingButton}
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="flex-center cursor-pointer h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
