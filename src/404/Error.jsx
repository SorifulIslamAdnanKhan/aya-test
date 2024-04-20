import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="h-screen flex flex-col justify-center">
            <Helmet>
                <title>404 - Aya</title>
            </Helmet>
            <div className="text-center max-w-2xl mx-auto p-2">
                <h1 className="font-bold text-7xl">4<span className="text-blue-600">0</span>4</h1>
                <h2 className="text-center font-bold my-5">Sorry Page Not Found!</h2>
                <p className="text-center leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ipsum at interdum consequat. Curabitur ornare et nibh non egestas.</p>
                <div className="my-12">
                <Link to="/" className="px-4 py-3 text-white hover:px-6 duration-500 bg-blue-600 rounded-md drop-shadow-2xl">Back To Home</Link>
                </div>
            </div>
        </section>
    );
};

export default Error;