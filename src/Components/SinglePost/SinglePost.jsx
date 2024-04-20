import { useState } from "react";
import Subscription from "../Subscription/Subscription";
import { AiOutlinePlayCircle, AiOutlineClose } from "react-icons/ai";
import { GrBlockQuote } from "react-icons/gr";
import {Helmet} from "react-helmet-async";

const SinglePost = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <section>
            <Helmet>
                <title>Single Post - Aya</title>
            </Helmet>
            <div className="px-5 lg:mx-32">
                <div className="flex flex-col items-center my-12">
                    <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="max-w-full" alt="Featured Image" />
                    <div className="flex gap-4 md:gap-10 flex-col md:flex-row items-center my-4">
                        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" alt="Authro Name" />
                        <p className="text-gray-500">Anna</p>
                        <p className="text-gray-500">July 3, 2023</p>
                        <p className="text-gray-500">2 comments</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-bold my-10">Pellentesque vel nunc ac nisi posuere scelerisque</h1>
                    <p className="leading-loose">Quisque semper feugiat nulla non vehicula. Sed vehicula lacinia nulla, eu accumsan dolor imperdiet et. Suspendisse pretium dui turpis, at ultricies turpis volutpat lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras at imperdiet magna. Morbi fringilla ornare viverra. Nam vulputate, mauris vitae maximus pellentesque, sem purus imperdiet magna, at venenatis tellus leo a odio. Morbi risus lectus, facilisis sit amet diam vel, ullamcorper pretium lectus. Maecenas dapibus commodo felis.</p>
                    <blockquote className="italic text-2xl py-10">
                        <GrBlockQuote className="text-5xl"></GrBlockQuote>
                        Etiam vel libero in augue suscipit fringilla. Sed quis consequat velit, non sodales lorem. Donec bibendum risus tempor, pretium lectus in, iaculis turpis. Nulla eget blandit nulla.
                    </blockquote>
                    <p className="leading-loose my-5">Nam vulputate, mauris vitae maximus pellentesque, sem purus imperdiet magna, at venenatis tellus leo a odio. Morbi risus lectus, facilisis sit amet diam vel, ullamcorper pretium lectus. Maecenas dapibus commodo felis.</p>
                    <div className="columns-1 lg:columns-2 gap-4 items-center">
                        <div>
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
                    <p className="leading-loose my-6">Morbi at velit ultricies, tristique velit pharetra, sagittis nisi. Nam vel ex fermentum, dapibus risus semper, consectetur velit. Nam ut velit vitae risus dignissim imperdiet eu ut urna. Morbi et felis non nibh sollicitudin aliquam sit amet vel diam. Phasellus nec cursus ante. Sed sagittis libero nec dapibus placerat. Vivamus consectetur diam justo, vel rhoncus tellus aliquam ac. Sed a ligula nisl. Nullam imperdiet a mauris eget hendrerit. Aliquam ac ipsum a neque fermentum sollicitudin. Donec posuere non lorem at posuere. Morbi condimentum purus at lacus sagittis interdum.</p>
                    <figure>
                        <img src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="max-w-full mx-auto" alt="Post Inner Image" />
                        <figcaption className="text-slate-400 text-center my-3">Image Caption: Latest Computer</figcaption>
                    </figure>
                    <p className="leading-loose my-6">Nam vulputate, mauris vitae maximus pellentesque, sem purus imperdiet magna, at venenatis tellus leo a odio. Morbi risus lectus, facilisis sit amet diam vel, ullamcorper pretium lectus. Maecenas dapibus commodo felis.</p>
                    <ol className="list-decimal pl-10 my-5">
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </ol>
                    <button className="px-4 py-3 my-6 text-white duration-500 bg-blue-600 rounded-md">Go to pricing</button>
                    <p className="leading-loose">Morbi at velit ultricies, tristique velit pharetra, sagittis nisi. Nam vel ex fermentum, dapibus risus semper, consectetur velit. Nam ut velit vitae risus dignissim imperdiet eu ut urna. Morbi et felis non nibh sollicitudin aliquam sit amet vel diam. Phasellus nec cursus ante. Sed sagittis libero nec dapibus placerat. Vivamus consectetur diam justo, vel rhoncus tellus aliquam ac. Sed a ligula nisl. Nullam imperdiet a mauris eget hendrerit. Aliquam ac ipsum a neque fermentum sollicitudin. Donec posuere non lorem at posuere. Morbi condimentum purus at lacus sagittis interdum.</p>
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="my-5 max-w-full mx-auto" alt="Post Inner Image Two" />
                    <p className="leading-loose my-5">Praesent suscipit quis purus et rutrum. Nullam vestibulum, odio id rutrum feugiat, dolor magna iaculis est, et imperdiet augue elit a nunc. Phasellus dictum orci dolor, in eleifend velit ultrices sed. Morbi accumsan consectetur ante vitae dapibus. Vestibulum imperdiet enim ante, eu imperdiet sapien volutpat quis.</p>
                </div>
                <hr />
                <div className="my-5">
                    <h3 className="font-bold">Related Posts</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-5 lg:mx-32">
                        <div className="flex flex-col rounded-md p-2">
                            <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80" className="rounded-md" alt="" />
                            <h4 className="font-bold py-5">
                                <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                            </h4>
                            <p className="text-gray-500">March 13, 2023</p>
                        </div>
                        <div className="flex flex-col rounded-md p-2">
                            <img src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="rounded-md" alt="" />
                            <h4 className="font-bold py-5">
                                <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                            </h4>
                            <p className="text-gray-500">July 13, 2023</p>
                        </div>
                        <div className="flex flex-col rounded-md p-2">
                            <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" className="rounded-md" alt="" />
                            <h4 className="font-bold py-5">
                                <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                            </h4>
                            <p className="text-gray-500">June 13, 2023</p>
                        </div>
                    </div>
                </div>

                <form action="#" className="my-5">
                    <h3 className="font-bold">Leave a Reply</h3>
                    <div className="w-full md:w-[550px] mx-auto">
                        <input type="text" name="name" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Name" />
                        <input type="email" name="email" className="w-full py-5 px-3 my-5 border border-gray-300 rounded-md" placeholder="Email" />
                        <textarea name="comment" className="w-full h-48 px-3 py-2 border border-gray-300 rounded-md resize-none" placeholder="Comments"></textarea>
                    </div>
                    <div className="text-center my-5">
                        <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Send Message</button>
                    </div>
                </form>

            </div>
            <Subscription></Subscription>
        </section>
    );
};

export default SinglePost;