import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import UseAuth from "../hooks/UseAuth";
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const tabs = [
  "Home",
  "Series",
  "Films",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

export default function NavBar() {
  const [showNavBackground, setShowNavBackground] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { logout } = UseAuth();
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 5) {
        setShowNavBackground(true);
      } else if (window.scrollY < 5) {
        setShowNavBackground(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`${
          showNavBackground ? "bg-black bg-opacity-70" : null
        } md:flex items-center justify-between w-full h-[10vh] fixed z-40 transition hidden`}
      >
        <div className="flex items-center px-16 py-6">
          <img className="w-24" src={Logo} alt="" />

          <div className="flex gap-6 ml-8">
            {tabs.map((tab) => (
              <div
                key={tab}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                <p>{tab}</p>
              </div>
            ))}
          </div>
        </div>

        {user && !isLoading && (
          <button className="px-16" onClick={logout}>
            <p className="text-white">Logout</p>
          </button>
        )}
      </nav>

      <nav className={`flex flex-col md:hidden fixed z-40 transition w-full h-fit' } ${showNavBackground ? "bg-black bg-opacity-70" : null}`}>
        <div className="flex items-center justify-end w-full text-white">
          {!showMenu && <ChevronLeftIcon className="w-16 cursor-pointer" onClick={() => {setShowMenu(true)}} />}
          {showMenu && <ChevronDownIcon className="w-16 cursor-pointer" onClick={() => {setShowMenu(false)}} />}
        </div>
        <div className={`${showMenu ? 'flex' : 'hidden'} border-b-2 border-red-600 items-end justify-between w-full h-60 bg-black p-6`}>
          <div className="flex items-start h-full">
            <img className="w-24" src={Logo} alt="" />
          </div>

          <div className="flex flex-col h-full items-end gap-2">
            {tabs.map((tab) => (
              <a href="" key={tab} className="text-white text-sm">{tab}</a>
            ))}
            {user && !isLoading && (
              <button className="text-white" onClick={logout}>Logout</button>

            )}
          </div>
        </div>
      </nav>
    </>
  );
}
