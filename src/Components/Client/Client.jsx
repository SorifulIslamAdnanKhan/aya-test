import brandOne from '../../assets/images/client/brand-01.png';
import brandTwo from '../../assets/images/client/brand-02.png';
import brandThree from '../../assets/images/client/brand-03.png';
import brandFour from '../../assets/images/client/brand-04.png';
import brandFive from '../../assets/images/client/brand-05.png';
import Marquee from "react-fast-marquee";

const Client = () => {
    return (
        <section className="py-12">
            <div className="text-center max-w-2xl mx-auto p-2">
                <h2 className="font-bold mb-5">Our Clients</h2>
                <p>Donec condimentum eget lorem ac sagittis. Vivamus fringilla lobortis tortor, quis pellentesque ligula pulvinar non.</p>
            </div>
            <div className="py-12 px-5 lg:mx-32">
                <Marquee>
                    <div className="flex gap-24 items-center">
                        <img src={brandOne} alt="Brand One" className="w-32" />
                        <img src={brandTwo} alt="Brand Two" className="w-32" />
                        <img src={brandThree} alt="Brand Three" className="w-32" />
                        <img src={brandFour} alt="Brand Four" className="w-32" />
                        <img src={brandFive} alt="Brand Five" className="w-32" />
                        <img src={brandOne} alt="Brand One" className="w-32" />
                        <img src={brandTwo} alt="Brand Two" className="w-32" />
                        <img src={brandThree} alt="Brand Three" className="w-32" />
                    </div>
                </Marquee>
            </div>

        </section>
    );
};

export default Client;