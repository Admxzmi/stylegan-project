import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">MyBrand</h1>
        <div className="space-x-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
