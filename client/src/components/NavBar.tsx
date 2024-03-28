import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { RootState } from '../app/store';
import UseAuth from "../hooks/UseAuth";


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
  const { logout } = UseAuth();
  const { user, isLoading } = useSelector((state: RootState) => state.user.value);

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
    <nav
      className={`${
        showNavBackground ? "bg-black bg-opacity-70" : null
      } flex items-center justify-between w-full h-[10vh] fixed z-40 transition`}
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

      {user && !isLoading && <button className="px-16" onClick={logout}>
        <p className="text-white">Logout</p>
      </button>}
    </nav>
  );
}
