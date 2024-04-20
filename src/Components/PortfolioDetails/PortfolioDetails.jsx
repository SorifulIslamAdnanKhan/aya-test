import { Link } from "react-router-dom";
import Subscription from "../Subscription/Subscription";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {Helmet} from "react-helmet-async";

const PortfolioDetails = () => {
    return (
        <section>
            <Helmet>
                <title>Portfolio Details - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">Portfolio Details</h1>
                <p><Link to="/">Home</Link> / Portfolio Details</p>
            </div>
            <div className="px-5 lg:mx-32">
                <div className="p-2 my-12">
                    <h2 className="text-center font-bold">Project Overview</h2>
                    <div className="max-w-2xl mx-auto my-12">
                        <p className="leading-loose">Duis ullamcorper facilisis augue nec ornare. Nam et purus a erat pulvinar porttitor. Morbi tincidunt rutrum magna, non pharetra elit consectetur vitae. Consequat eu neque in dignissim. Duis ullamcorper facilisis augue nec ornare. Purus a erat pulvinar porttitor.</p>
                        <ul className="list-disc my-5 pl-10">
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                    </div>
                    <div>
                        <PhotoProvider>
                            <PhotoView src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" alt="portfolio-six">
                                <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" alt="portfolio-six" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80" className="w-full" alt="portfolio-five">
                                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80" className="w-full" alt="portfolio-five" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="columns-1 md:columns-2">
                            <PhotoProvider>
                                <PhotoView src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-seven">
                                    <img src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-seven" />
                                </PhotoView>
                            </PhotoProvider>
                            <PhotoProvider>
                                <PhotoView src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-nine">
                                    <img src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-nine" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
            </div>
            <Subscription></Subscription>
        </section>
    );
};

export default PortfolioDetails;