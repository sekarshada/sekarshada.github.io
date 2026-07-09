import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // or logo.svg

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto  px-8 md:px-20 py-6 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-4"
        >
          <img
            src={Logo}
            alt="Gab Logo"
            className="
              h-14
              w-14
              object-contain
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span
            className="
              text-2xl
              font-semibold
              text-white
              transition-colors
              duration-300
              group-hover:text-[#C96A2A]
            "
          >
            Gab
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/resume"
            className="
              relative
              text-xl
              font-semibold
              font-medium
              text-gray-300
              transition-colors
              duration-300
              hover:text-[#C96A2A]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#C96A2A]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Resume
          </Link>
        </nav>

      </div>
    </header>
  );
}