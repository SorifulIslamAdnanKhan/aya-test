import CEO from '../../assets/images/about/CEO.jpg';
import CMO from '../../assets/images/about/CMO.jpg';
const AboutSection = () => {
    return (
        <section className="bg-slate-50">
            <div className="flex justify-evenly items-center flex-col lg:flex-row py-24">
                {/* CEO & CMO Photo Area */}
                <div className="p-4">
                    <div className="flex gap-8 items-center">
                        <figure className="hover:drop-shadow-2xl">
                            <img src={CEO} className="w-48 rounded-md" alt="CEO" />
                            <figcaption className="text-slate-400 text-center my-3">CEO: Dr. Adam</figcaption>
                        </figure>
                        <figure className="mt-40 hover:drop-shadow-2xl">
                            <img src={CMO} className="w-48 rounded-md" alt="CMO" />
                            <figcaption className="text-slate-400 text-center my-3">CMO: Anna</figcaption>
                        </figure>
                    </div>
                </div>
                {/* Our Story Area */}
                <div className="w-full lg:w-1/2 p-8 bg-white rounded-md drop-shadow-2xl">
                    <h2 className="mb-8 font-bold">Our Story</h2>
                    <p className="my-5 leading-loose">Nam aliquam condimentum est sit amet aliquet. Duis fermentum sem a tellus rhoncus interdum. Aliquam tempus arcu eget felis feugiat, ac condimentum mi mollis. Quisque varius dapibus enim. Pellentesque eleifend neque id pulvinar porta. Nullam eu imperdiet libero. Vivamus eu dignissim tellus. Suspendisse eget erat et diam posuere lobortis. Etiam placerat turpis semper, dapibus justo a, venenatis arcu. Morbi tristique eleifend tempus.</p>
                    <p className="leading-loose"> Quisque metus urna, rhoncus vel rutrum eget, malesuada in lacus. Sed ut tincidunt erat, ut semper nisl. Donec pretium elit enim, sed dapibus sem euismod eget. Duis laoreet turpis sed felis finibus, eu euismod tortor facilisis. Maecenas imperdiet metus quis posuere vestibulum. Aliquam vitae ornare lacus, eu fermentum ligula.</p>
                    <button className="px-4 py-3 mt-5 text-white duration-500 bg-blue-600 rounded-md">Read More</button>
                </div>
            </div>
        </section>

    );
};

export default AboutSection;