import { useState } from 'react';
import { AiOutlinePlayCircle, AiOutlineClose } from "react-icons/ai";
import Client from "../Client/Client";
import SpecialSection from "../SpecialSection/SpecialSection";
import Subscription from "../Subscription/Subscription";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Testimonial from "../Testimonial/Testimonial";
import FAQs from '../FAQs/FAQs';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const accordionItems = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
    ];

    const [openAccordionId, setOpenAccordionId] = useState(null);

    const handleAccordionClick = (id) => {
        setOpenAccordionId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section>
            <Helmet>
                <title>About Us - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">About Us</h1> 
                <p><Link to="/">Home</Link> / About Us</p>
            </div>
            <div className="px-5 lg:mx-32">
                <div className="flex gap-10 items-center flex-col lg:flex-row my-12">
                    {/* CEO Photo Area */}
                    <div className="p-4">
                        <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" className=" rounded-md" alt="CEO" />
                    </div>
                    {/* Our Story Area */}
                    <div className="w-full p-4 bg-white rounded-md">
                        <h2 className="mb-8 font-bold">Our Story</h2>
                        <p className="my-5 leading-loose">Aliquam tempus arcu eget felis feugiat, ac condimentum mi mollis. Quisque varius dapibus enim. Pellentesque eleifend neque id pulvinar porta. Nullam eu imperdiet libero. Vivamus eu dignissim tellus. Suspendisse eget erat et diam posuere lobortis. Etiam placerat turpis semper, dapibus justo a, venenatis arcu. Morbi tristique eleifend tempus.</p>
                        <h3 className="font-bold">Who We Are</h3>
                        <p className="leading-loose my-5">Donec pretium elit enim, sed dapibus sem euismod eget. Duis laoreet turpis sed felis finibus, eu euismod tortor facilisis. Maecenas imperdiet metus quis posuere vestibulum. Aliquam vitae ornare lacus, eu fermentum ligula.</p>
                    </div>
                </div>
            </div>

            <div className="px-5 lg:mx-32">
                <div className="columns-1 lg:columns-2 gap-4 items-center">
                    <div>
                        <h2 className="mb-8 font-bold">Our Mission</h2>
                        <p className="leading-loose my-5">Cras congue, dolor eget efficitur lacinia, tellus sapien hendrerit nunc, sed placerat nibh metus quis tortor. Nam vulputate, mauris vitae maximus pellentesque, sem purus imperdiet magna, at venenatis tellus leo a odio. Morbi risus lectus, facilisis sit amet diam vel, ullamcorper pretium lectus. Maecenas dapibus commodo felis. Quisque sed luctus nulla.</p>
                        <ul className="list-disc pl-10">
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                    </div>
                    <div className="max-w-4xl mx-auto relative">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="my-5 max-w-full mx-auto" alt="Post Inner Image Two" />

                        <button onClick={openModal} className="p-5 md:p-10 bg-blue-600 rounded-full text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <AiOutlinePlayCircle className="text-4xl"></AiOutlinePlayCircle>
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
                                <div className="relative">
                                    <button onClick={closeModal} className="absolute -top-14 -right-6 md:-top-6 md:-right-14 p-4 text-white hover:text-gray-300">
                                        <AiOutlineClose className="text-4xl"></AiOutlineClose>
                                    </button>
                                    <iframe
                                        className="w-full md:w-[520px] mx-auto h-96"
                                        src="https://www.youtube.com/embed/EEeu7-xJX_c"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="my-12">
                <SpecialSection></SpecialSection>
            </div>
            <Client></Client>
            <div className="text-center max-w-2xl mx-auto p-2">
                <h2 className="font-bold mb-5">Our Team Members</h2>
                <p>Nunc vitae nisi vel nulla finibus commodo. Maecenas fringilla eros aliquet massa euismod interdum. Vestibulum ac purus fringilla, faucibus risus pellentesque, laoreet purus. Morbi scelerisque nibh non condimentum interdum.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 px-5 lg:mx-32">
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Willam David" />
                    <h4 className="font-bold py-3">Willam David</h4>
                    <p className="pb-3">COO</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Maria Luis" />
                    <h4 className="font-bold py-3">Maria Luis</h4>
                    <p className="pb-3">Lead Developer</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Andrew Jones" />
                    <h4 className="font-bold py-3">Andrew Jones</h4>
                    <p className="pb-3">Lead Designer</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Anna Jones" />
                    <h4 className="font-bold py-3">Anna Jones</h4>
                    <p className="pb-3">Project Manager</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Willam David" />
                    <h4 className="font-bold py-3">Willam David</h4>
                    <p className="pb-3">COO</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Maria Luis" />
                    <h4 className="font-bold py-3">Maria Luis</h4>
                    <p className="pb-3">Lead Developer</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Andrew Jones" />
                    <h4 className="font-bold py-3">Andrew Jones</h4>
                    <p className="pb-3">Lead Designer</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Anna Jones" />
                    <h4 className="font-bold py-3">Anna Jones</h4>
                    <p className="pb-3">Project Manager</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
            </div>
            <Testimonial></Testimonial>
            <div className="my-12 p-4 px-5 lg:mx-32">
                <div className="text-center">
                    <h2 className="font-bold">Frequently Asked Questions</h2>
                    <p className="leading-loose my-5">Maecenas fringilla eros aliquet massa euismod interdum dolor eget efficitur lacinia.</p>
                </div>
                <div className="w-full lg:w-[800px] mx-auto px-4 py-12">
                    {accordionItems.map((item) => (
                        <FAQs
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            isOpen={item.id === openAccordionId}
                            onClick={() => handleAccordionClick(item.id)}
                        />
                    ))}
                </div>
            </div>
            <Subscription></Subscription>
        </section>
    );
};

export default About;