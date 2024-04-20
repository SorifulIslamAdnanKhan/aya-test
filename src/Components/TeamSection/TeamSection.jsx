import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const TeamSection = () => {
    return (
        <section className="py-12">
            <div className="text-center max-w-2xl mx-auto p-2">
                <h2 className="font-bold mb-5">Our Honorable Members</h2>
                <p>Nunc vitae nisi vel nulla finibus commodo. Maecenas fringilla eros aliquet massa euismod interdum. Vestibulum ac purus fringilla, faucibus risus pellentesque, laoreet purus. Morbi scelerisque nibh non condimentum interdum.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 px-5 lg:mx-32">
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Willam David" />
                    <h4 className="font-bold py-3">Willam David</h4>
                    <p className="pb-3">COO</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Maria Luis" />
                    <h4 className="font-bold py-3">Maria Luis</h4>
                    <p className="pb-3">Lead Developer</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Andrew Jones" />
                    <h4 className="font-bold py-3">Andrew Jones</h4>
                    <p className="pb-3">Lead Designer</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-50 hover:bg-blue-600 hover:text-white items-center relative group">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="w-full" alt="Anna Jones" />
                    <h4 className="font-bold py-3">Anna Jones</h4>
                    <p className="pb-3">Project Manager</p>
                    <div className="hidden group-hover:flex flex-col gap-2 absolute left-3 py-3 top-0">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;