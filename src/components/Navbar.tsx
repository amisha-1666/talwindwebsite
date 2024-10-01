import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex justify-center space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#about" className="text-white">About</a></li>
        <li><a href="#team" className="text-white">Team</a></li>
        <li><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
