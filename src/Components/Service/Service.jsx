import Client from "../Client/Client";
import { CiMonitor, CiMobile2, CiPen, CiServer, CiEdit } from "react-icons/ci";
import { PiTrendUp, PiBrowserLight, PiLayoutLight, PiRocketLaunchLight } from "react-icons/pi";
import SpecialSection from "../SpecialSection/SpecialSection";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";

const Service = () => {
    return (
        <section>
            <Helmet>
                <title>Service - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">Service</h1> 
                <p><Link to="/">Home</Link> / Service</p>
            </div>
            <div className="px-5 lg:mx-32 my-12">
                <div className="columns-1 lg:columns-2 gap-4 items-center">
                    <div>
                        <h2 className="mb-8 font-bold">Why Choose Us</h2>
                        <h3 className="font-bold">Lorem ipsum dolor sit amet, consectetur</h3>
                        <p className="leading-loose my-5">Cras congue, dolor eget efficitur lacinia, tellus sapien hendrerit nunc, sed placerat nibh metus quis tortor. Nam vulputate, mauris vitae maximus pellentesque, sem purus imperdiet magna, at venenatis tellus leo a odio. Morbi risus lectus, facilisis sit amet diam vel, ullamcorper pretium lectus. Maecenas dapibus commodo felis. Quisque sed luctus nulla.</p>
                        <ul className="list-disc pl-10 my-5">
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <img src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className=" max-w-full mx-auto" alt="Service Image" />
                    </div>
                </div>
            </div>
            <SpecialSection></SpecialSection>
            <div className="text-center max-w-2xl mx-auto p-2 mt-12">
                <h2 className="font-bold mb-5">Our Services</h2>
                <p>Morbi tincidunt rutrum magna, non pharetra elit consectetur vitae. Donec consequat eu neque in dignissim. Duis ullamcorper facilisis augue nec ornare. Nam et purus a erat pulvinar porttitor.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-5 lg:mx-32 group">
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <PiBrowserLight className="text-4xl"></PiBrowserLight>
                        <h3 className="py-5">Web Design</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <CiMobile2 className="text-4xl"></CiMobile2>
                        <h3 className="py-5">APP Development</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <CiMonitor className="text-4xl"></CiMonitor>
                        <h3 className="py-5">Web Development</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <CiPen className="text-4xl"></CiPen>
                        <h3 className="py-5">Graphic Design</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <PiLayoutLight className="text-4xl"></PiLayoutLight>
                        <h3 className="py-5">UI UX Design</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <CiServer className="text-4xl"></CiServer>
                        <h3 className="py-5">Domain & Hosting</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <PiTrendUp className="text-4xl"></PiTrendUp>
                        <h3 className="py-5">Digital Marketing</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>                </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <PiRocketLaunchLight className="text-4xl"></PiRocketLaunchLight>
                        <h3 className="py-5">Search Engine Optimization</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
                <Link to="/service-details">
                    <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                        <CiEdit className="text-4xl"></CiEdit>
                        <h3 className="py-5">Content Creation</h3>
                        <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    </div>
                </Link>
            </div>
            <Client></Client>
        </section>
    );
};

export default Service;