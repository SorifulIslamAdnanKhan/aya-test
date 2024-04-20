import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/AYA-logo.png';
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-12 p-4 md:px-24 text-gray-400">
            <div className="flex justify-between items-start flex-col lg:flex-row gap-4 py-5">
                <div>
                    <img src={logo} alt="Aya Logo" className="w-16" />
                    <div className="py-4">
                        <p className="leading-loose">Address: 72 The Green London E47 2TH</p>
                        <p className="leading-loose">Phone: 15654141516, 98554115795</p>
                        <p className="leading-loose">Email Address: example@gmail.com</p>
                        <div className="flex gap-2 py-3 ">
                            <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                            <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                            <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                            <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <h4>Techonologies</h4>
                        <div className="py-4 text-sm leading-loose">
                            <ul>
                                <li>JavaScript</li>
                                <li>React Js</li>
                                <li>React Native</li>
                                <li>Laravel</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <div className="text-sm py-4 leading-loose">
                            <ul>
                                <li><Link to="">About Us</Link></li>
                                <li><Link to="">Contact Us</Link></li>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Our Team</Link></li>
                                <li><Link to="">Affiliate Program</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Our Services</h4>
                        <div className="text-sm py-4 leading-loose">
                            <ul>
                                <li><Link to="">Web Development</Link></li>
                                <li><Link to="">APP Development</Link></li>
                                <li><Link to="">Graphic Design</Link></li>
                                <li><Link to="">UI UX Design</Link></li>
                                <li><Link to="">Digital Marketing</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 flex flex-col-reverse lg:flex-row items-center justify-around gap-4 border-t-2 border-slate-900">
                <p className="">Copyright © 2023 Aya - All right reserved</p>
                <ul className="flex gap-5 items-center text-sm">
                    <li><Link to="">Terms of Use</Link></li>
                    <li><Link to="">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;