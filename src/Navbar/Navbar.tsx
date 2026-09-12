
import NavLogo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <div>
          <img
            src={NavLogo}
            alt="Logo"
            className="w-40 h-12 object-contain"
          />
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-medium text-gray-700">
          <li>
            <a href="" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies" className="hover:text-blue-600 transition">
              Technologies
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
            Sign In
          </button>

          <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-lg font-medium  transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;



