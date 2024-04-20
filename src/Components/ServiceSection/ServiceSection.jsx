import { CiMonitor, CiMobile2, CiPen, CiServer } from "react-icons/ci";
import { PiBrowserLight, PiLayoutLight } from "react-icons/pi";
const ServiceSection = () => {
    return (
        <section className="py-12">
            <div className="text-center max-w-2xl mx-auto p-2">
                <h2 className="font-bold mb-5">Our Services</h2>
                <p>Morbi tincidunt rutrum magna, non pharetra elit consectetur vitae. Donec consequat eu neque in dignissim. Duis ullamcorper facilisis augue nec ornare. Nam et purus a erat pulvinar porttitor.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-5 lg:mx-32 group">
                <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                    <PiBrowserLight className="text-4xl"></PiBrowserLight>
                    <h3 className="py-5">Web Design</h3>
                    <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                </div>
                <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                    <CiMobile2 className="text-4xl"></CiMobile2>
                    <h3 className="py-5">APP Development</h3>
                    <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                </div>
                <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                    <CiMonitor className="text-4xl"></CiMonitor>
                    <h3 className="py-5">Web Development</h3>
                    <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                </div>
                <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                    <CiPen className="text-4xl"></CiPen>
                    <h3 className="py-5">Graphic Design</h3>
                    <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                </div>
                <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                    <PiLayoutLight className="text-4xl"></PiLayoutLight>
                    <h3 className="py-5">UI UX Design</h3>
                    <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                </div>
                <div className="hover:bg-blue-600 hover:text-white duration-700 text-center flex flex-col items-center py-12 rounded-md group-hover:scale-[0.85] hover:!scale-100">
                    <CiServer className="text-4xl"></CiServer>
                    <h3 className="py-5">Domain & Hosting</h3>
                    <p className="px-0 xl:px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                </div>
            </div>
            <div className="text-center">
                <button className="px-4 py-3 text-white hover:px-6 duration-500 bg-blue-600 rounded-md drop-shadow-2xl">View All Services</button>
            </div>
        </section>
    );
};

export default ServiceSection;