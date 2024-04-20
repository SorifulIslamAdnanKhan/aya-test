import banner from '../../assets/images/banner/banner.png';
const BannerOne = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center items-center px-5 md:px-16">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="font-bold">Welcome to Our Website</h1>
                    <p className="md:text-lg my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, urna vitae hendrerit interdum, nunc nisi tincidunt ex.</p>
                    <button className="rounded-md mb-8 px-3 py-2  shadow-md text-sm md:text-base md:px-8 md:py-2 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Learn More</button>
                </div>
                <div className="md:w-1/2">
                    <img src={banner} alt="Banner Image" className="w-full h-auto"/>
                </div>
            </div>
        </section>
    );
};

export default BannerOne;