import { useState } from "react";
import logo from '../../assets/images/logo/aya-logo.png';
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div>
                {/* Top Nav Bar */}
                <div className="items-center bg-blue-500 hidden lg:block text-white">
                    <div className="flex gap-16 items-center justify-around">
                        <div className="flex gap-4 items-center">
                            <HiLocationMarker />
                            <p>72 The Green London E47 2TH</p>
                            <FaEnvelopeOpen />
                            <p>example@gmail.com</p>
                            <LuPhoneCall />
                            <p>15654141516</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <a href="#" className="rounded-full p-3 border-2duration-150"><FaFacebookF></FaFacebookF></a>
                            <a href="#" className="rounded-full p-3 border-2duration-150"><FaTwitter></FaTwitter></a>
                            <a href="#" className="rounded-full p-3 border-2duration-150"><FaLinkedin></FaLinkedin></a>
                            <a href="#" className="rounded-full p-3 border-2duration-150"><FaYoutube></FaYoutube></a>
                        </div>
                    </div>
                </div>

                {/* Main Navigation Menu */}
                <nav className="relative flex items-center justify-between lg:justify-evenly p-2">
                    {/* Logo section */}
                    <Link to="/" >
                        <img className="w-16" src={logo} alt="Aya Logo" />
                    </Link>
                    {/* Nav Items Section */}
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>About</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/service' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Service</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Portfolio</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 space-y-4">
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Blog</NavLink>
                        </li>
                        <li className="relative group hover:border-b-4 border-b-blue-500 pr-4 duration-200 space-y-4">
                            <a to='#' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Pages</a>
                            <ul className="opacity-0 group-hover:opacity-100 absolute top-[100%] bg-white p-2 py-5 z-20 space-y-4">
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/home-two' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home Two</NavLink>
                                </li>
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/home-three' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home Three</NavLink>
                                </li>
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/service-details' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Service Details</NavLink>
                                </li>
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/portfolio-details' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Portfolio Details</NavLink>
                                </li>
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/blog-three-column' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Blog Three Column</NavLink>
                                </li>
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/single-post' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Single Blog Post</NavLink>
                                </li>
                                <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                    <NavLink to='/404' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>404</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="flex gap-3 justify-center items-center">
                        {/* Navber CTA Button */}
                        <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 md:py-2 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Get Started</button>
                        {/* Mobile Navbar Section */}
                        <div className="lg:hidden">
                            {/* Dropdown Open Button */}
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <FaBars className="text-xl mt-1 text-gray-600" />
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full z-30">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        {/* Logo section */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <Link to="/" className="inline-flex items-center">
                                                    <Link to="/" >
                                                        <img className="w-16" src={logo} alt="" />
                                                    </Link>
                                                </Link>
                                            </div>
                                            {/* Dropdown Menu Close Button */}
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <GrClose className="text-xl text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Mobile Nav Items Section */}
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>About</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Service</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Portfolio</NavLink>
                                                </li>
                                                <li className="space-y-4">
                                                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Blog</NavLink>
                                                </li>
                                                <li className="relative group space-y-4">
                                                    <a to='#' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Pages</a>
                                                    <ul className="opacity-0 group-hover:opacity-100 absolute top-[100%] bg-white p-2 py-5 z-20 space-y-4">
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/home-two' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home Two</NavLink>
                                                        </li>
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/home-three' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home Three</NavLink>
                                                        </li>
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/service-details' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Service Details</NavLink>
                                                        </li>
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/portfolio-details' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Portfolio Details</NavLink>
                                                        </li>
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/blog-three-column' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Blog Three Column</NavLink>
                                                        </li>
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/single-post' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Single Blog Post</NavLink>
                                                        </li>
                                                        <li className="text-slate-950 hover:text-blue-600 whitespace-nowrap">
                                                            <NavLink to='/404' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>404</NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Contact</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;