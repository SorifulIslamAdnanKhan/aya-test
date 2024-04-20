import { PiEnvelopeSimpleOpenLight } from "react-icons/pi";

const Subscription = () => {
    return (
        <section className="py-20 bg-blue-600">
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 p-2">
                <div className="flex gap-4 justify-center items-center text-white">
                    <PiEnvelopeSimpleOpenLight className="text-4xl"></PiEnvelopeSimpleOpenLight>
                    <div>
                        <h4 className="font-bold">Subscribe to Get New Updates</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <form className="flex items-center" action="#">
                        <input className="py-3 px-4 lg:px-24 text-lg rounded-full w-full" type="email" name="email" placeholder="Email Address" id="" />
                        <button className="px-4 lg:px-6 py-3.5 text-white bg-black rounded-full -ml-12">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscription;