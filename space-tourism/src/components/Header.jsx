import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex lg:w-full items-center gap-400 py-300 pl-400 pr-400 md:pr-0 lg:pl-800">
      {/* Logo */}
      <NavLink
        to="/"
        className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-white"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C10 5.5 14.5 10 20 10C14.5 10 10 14.5 10 20C10 14.5 5.5 10 0 10C5.5 10 10 5.5 10 0Z"
            fill="#0B0D17"
          />
        </svg>
      </NavLink>

      {/* Divider line, desktop only — overlaps into the start of the nav */}
      <div className="hidden lg:z-10 lg:block lg:ml-9 lg:-mr-800 lg:h-px lg:flex-1 lg:bg-blue-300/25" />

      {/* Desktop nav */}
      <nav className="hidden md:flex md:w-full md:min-w-0 md:items-center md:justify-center md:bg-white/5 md:backdrop-blur-md md:pl-300 md:ml-400 lg:ml-0 md:pt-400 lg:w-3/5 lg:pl-800 lg:pr-400">
        <ul className="flex items-center justify-center gap-500">
          {NAV_LINKS.map(({ number, label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `block border-b-[3px] pb-300 font-condensed text-preset-8 lg:text-preset-7 tracking-[2.7px] uppercase text-white transition-colors ${
                    isActive
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`
                }
              >
                {number && <span className="mr-100 font-bold">{number}</span>}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="ml-auto md:hidden"
        aria-label="Open menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 1H24M0 12H24M0 23H24" stroke="#D0D6F9" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 md:hidden">
          <div className="flex h-full w-[70%] max-w-[300px] flex-col bg-blue-900/95 px-400 py-400 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="mb-800 self-end"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L19 19M19 1L1 19"
                  stroke="#D0D6F9"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-500">
              {NAV_LINKS.map(({ number, label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-condensed text-preset-8 tracking-[2.7px] uppercase text-white ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`
                    }
                  >
                    {number && (
                      <span className="mr-150 font-bold">{number}</span>
                    )}
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
