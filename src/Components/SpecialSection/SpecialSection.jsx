import { PiUsersLight, PiUsersThreeLight, PiTrophyLight, PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import CountUp from 'react-countup';

const SpecialSection = () => {
    return (
        <section className="bg-blue-600 p-12">
            <div className="grid lg:grid-cols-5 gap-5 py-5 bg-white rounded-md">
                {/* Special Items */}
                <div className="flex flex-col items-center">
                    <PiUsersThreeLight className="text-8xl p-7 text-blue-600 hover:border-dashed hover:border-2 border-blue-600 rounded-full"></PiUsersThreeLight>
                    <h3 className="font-bold py-3"><CountUp end={25}/> K</h3>
                    <p className="text-blue-600">Global Customers</p>
                </div>
                <div className="flex flex-col items-center">
                    <PiUsersLight className="text-8xl p-7 text-blue-600 hover:border-dashed hover:border-2 border-blue-600 rounded-full"></PiUsersLight>
                    <h3 className="font-bold py-3"><CountUp end={3000}/> +</h3>
                    <p className="text-blue-600">Happy Clients</p>
                </div>
                <div className="flex flex-col items-center">
                    <GoProject className="text-8xl p-7 text-blue-600 hover:border-dashed hover:border-2 border-blue-600 rounded-full"></GoProject>
                    <h3 className="font-bold py-3"><CountUp end={200}/> +</h3>
                    <p className="text-blue-600">Projects</p>
                </div>
                <div className="flex flex-col items-center">
                    <PiGlobeHemisphereWestDuotone className="text-8xl p-7 text-blue-600 hover:border-dashed hover:border-2 border-blue-600 rounded-full"></PiGlobeHemisphereWestDuotone>
                    <h3 className="font-bold py-3"><CountUp end={120}/> +</h3>
                    <p className="text-blue-600">Countries</p>
                </div>
                <div className="flex flex-col items-center">
                    <PiTrophyLight className="text-8xl p-7 text-blue-600 hover:border-dashed hover:border-2 border-blue-600 rounded-full"></PiTrophyLight>
                    <h3 className="font-bold py-3"><CountUp end={100}/> +</h3>
                    <p className="text-blue-600">Awards</p>
                </div>
            </div>
        </section>
    );
};

export default SpecialSection;