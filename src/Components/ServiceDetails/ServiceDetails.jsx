import { useState } from "react";
import { Link } from "react-router-dom";
import FAQs from "../FAQs/FAQs";
import Subscription from "../Subscription/Subscription";
import {Helmet} from "react-helmet-async";

const ServiceDetails = () => {
    const accordionItems = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Etiam elementum venenatis lacinia. Ut luctus, massa ut egestas congue, enim erat tristique turpis, lobortis cursus turpis libero id metus. Proin nunc magna, tincidunt eu est et, fringilla lacinia tortor.',
        },
    ];

    const [openAccordionId, setOpenAccordionId] = useState(null);

    const handleAccordionClick = (id) => {
        setOpenAccordionId((prevId) => (prevId === id ? null : id));
    };
    return (
        <section>
            <Helmet>
                <title>Service Details - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">Service Details</h1>
                <p><Link to="/">Home</Link> / Service Details</p>
            </div>
            <div className="px-5 my-12 lg:mx-32">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full max-w-3xl mx-auto" alt="Web Development" />
                <h2 className="font-bold my-12">Web Development</h2>
                <p className="leading-loose">Vivamus varius rutrum mi, nec finibus enim commodo eget. Pellentesque sit amet nisl id sem accumsan placerat. Phasellus ornare egestas justo. Quisque varius dapibus enim. Pellentesque eleifend neque id pulvinar porta. Etiam placerat turpis semper, dapibus justo a, venenatis arcu. Morbi tristique eleifend tempus.</p>
                <ul className="list-disc my-5 pl-10">
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                </ul>
                <h3 className="font-bold my-5">Web Development</h3>
                <p className="leading-loose">Integer pharetra augue in eros iaculis luctus. Pellentesque sit amet nisl id sem accumsan placerat. Phasellus ornare egestas justo. Nullam nec ornare arcu. Mauris finibus ex ligula, eu volutpat augue maximus vitae. Aliquam tempus arcu eget felis feugiat, ac condimentum mi mollis. Quisque varius dapibus enim. Pellentesque eleifend neque id pulvinar porta. Nullam eu imperdiet libero. Vivamus eu dignissim tellus. Suspendisse eget erat et diam posuere lobortis. Etiam placerat turpis semper, dapibus justo a, venenatis arcu. Morbi tristique eleifend tempus.</p>
                <div className="w-full lg:w-[800px] mx-auto px-4 py-12">
                    <div className="text-center">
                        <h2 className="font-bold">Frequently Asked Questions</h2>
                        <p className="leading-loose my-5">Maecenas fringilla eros aliquet massa euismod interdum dolor eget efficitur lacinia.</p>
                    </div>
                    {accordionItems.map((item) => (
                        <FAQs
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            isOpen={item.id === openAccordionId}
                            onClick={() => handleAccordionClick(item.id)}
                        />
                    ))}
                </div>
            </div>
            <Subscription></Subscription>
        </section>
    );
};

export default ServiceDetails;