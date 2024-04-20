import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PiPhoneCallLight, PiEnvelopeSimpleOpenThin, PiMapPinLight } from "react-icons/pi";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j1f0k5c', 'template_klb0nbr', form.current, 'o9MieoWJcCVid4HTl')
          .then(() => {
              toast.success(`Your message has been sent successfully.`);
          }, (error) => {
            toast.error(error.text);
          });
      };

    return (
        <section>
            <Helmet>
                <title>Contact - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">Contact</h1>
                <p><Link to="/">Home</Link> / Conatct</p>
            </div>
            <h2 className="text-center font-bold my-12">We Are Here For You</h2>
            <div className="px-5 lg:mx-32">
                <div className="grid md:grid-cols-3 gap-5">
                    <div className="text-center flex flex-col items-center py-12 border-2 hover:border-blue-600">
                        <PiPhoneCallLight className="text-4xl text-blue-600"></PiPhoneCallLight>
                        <h3 className="py-5">Phone Number</h3>
                        <p>987 6567 890</p>
                        <p>988 6767 690</p>
                        <p>983 6367 990</p>
                    </div>
                    <div className="text-center flex flex-col items-center py-12 border-2 hover:border-blue-600">
                        <PiEnvelopeSimpleOpenThin className="text-4xl text-blue-600"></PiEnvelopeSimpleOpenThin>
                        <h3 className="py-5">Email Address</h3>
                        <p>example@gmail.com</p>
                        <p>info@gmail.com</p>
                    </div>
                    <div className="text-center flex flex-col items-center py-12 border-2 hover:border-blue-600">
                        <PiMapPinLight className="text-4xl text-blue-600"></PiMapPinLight>
                        <h3 className="py-5">Office Address</h3>
                        <p>72 The Green London E47 2TH</p>
                    </div>
                </div>
                <div className="my-12">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2 className="text-center text-blue-600 mb-5">Get In Touch!</h2>
                        <div className="my-5 grid md:grid-cols-2 gap-5">
                            <div>
                                <input type="text" name="name" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Name" required />
                            </div>
                            <div>
                                <input type="email" name="email" className="w-full py-5 px-3  border border-gray-300 rounded-md" placeholder="Email" required />
                            </div>
                            <div>
                                <input type="number" name="phone" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Phone" />
                            </div>
                            <div>
                                <input type="text" name="website" className="w-full py-5 px-3  border border-gray-300 rounded-md" placeholder="Website" />
                            </div>
                            <div className="md:col-span-2">
                                <textarea name="message" className="w-full h-48 px-3 py-2 border border-gray-300 rounded-md resize-none" placeholder="Messages" required></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contact;