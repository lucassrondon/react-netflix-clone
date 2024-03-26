import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

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
      } flex items-center w-full h-[10vh] fixed z-40 transition`}
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
    </nav>
  );
}
