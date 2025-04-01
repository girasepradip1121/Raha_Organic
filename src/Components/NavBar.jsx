import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-purple-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-2 px-0 lg:px-12 px-2">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold">
          <img
            src="logo.svg"
            alt="logo"
            className="h-16 sm:h-30 md:h-30 w-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white border-2 overflow-hidden flex-grow max-w-lg mx-0 lg:mx-4 mx-2">
          <span className="p-2 text-gray-500">
            <img src="search.svg" alt="search icon" />
          </span>
          <input
            type="text"
            placeholder="Search.."
            className="w-full p-2 outline-none text-gray-700 text-sm sm:text-base"
          />
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-sm sm:text-base">
            Search
          </button>
        </div>

        {/* Icons on Right Side */}
        <div className="flex gap-4 text-lg sm:text-xl">
          <Link to="/login" className="cursor-pointer hover:text-gray-300">
            <img src="profile.svg" alt="profile icon" />
          </Link>
          <Link to="/cart" className="cursor-pointer hover:text-gray-300">
            <img src="cart.svg" alt="cart icon" />
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white text-gray-800 shadow-md overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex items-center justify-center px-4 sm:px-8 space-x-4 sm:space-x-6 py-2 sm:py-3 text-sm sm:text-lg">
          <li>
            <Link to="/" className="hover:text-purple-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-purple-500 cursor-pointer">
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/allproducts"
              className="hover:text-purple-500 cursor-pointer"
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              to="/bestseller"
              className="hover:text-purple-500 cursor-pointer"
            >
              Best Seller
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-500 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="hover:text-purple-500 cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
