import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
    // Slider Image Arrry
    const images = [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

  // Slider Arrow Setting
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    };
    
    // Autoplay Setting
    const autoplayInterval = 5000;

    useEffect(() => {
        let timer;
        if (autoplayInterval) {
            timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoplayInterval);
        }
        return () => {
            clearInterval(timer);
        };
    }, [autoplayInterval, images.length]);

    return (
        <section className="relative">
            <div className="absolute inset-0 gradient-background"></div>
            {/* Slider Image */}
            <img src={images[currentImageIndex]} alt="Carousel Image" className="w-full slider-image z-0" />
            {/* Slider Text */}
            <div className="absolute max-w-2xl mx-auto inset-0 flex flex-col items-center text-center justify-center text-white p-4 z-10">
                <h1 className="font-bold">Take Your Business To Next Level</h1>
                <p className="md:text-lg my-8 px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ipsum at interdum consequat. Curabitur ornare et nibh non egestas.</p>
                <button className="px-4 py-3 hover:px-6 duration-500 bg-blue-600 rounded-md">Learn More</button>
            </div>
            {/* Slider Left and Right Arrow  */}
            <button className="absolute top-1/2 transform -translate-y-1/2 left-3 text-white bg-blue-600 hover:bg-blue-600 px-2 py-2 rounded z-20" onClick={previousImage}>
                <AiOutlineArrowLeft />
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-3 text-white bg-blue-600 hover:bg-blue-600 px-2 py-2 rounded z-20" onClick={nextImage}>
                <AiOutlineArrowRight />
            </button>
            {/* Slider Dot Navigation */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center p-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => selectImage(index)}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Slider;