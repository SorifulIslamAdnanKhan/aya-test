
const BannerTwo = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 gradient-background"></div>
            <div className="bg-cover bg-center min-h-screen flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" }}>
                <div className="max-w-2xl mx-auto text-center text-white z-10">
                    <h1 className="font-bold">Welcome to Our Website</h1>
                    <p className="md:text-lg my-8 px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, urna vitae hendrerit interdum, nunc nisi tincidunt ex.</p>
                    <div className="mt-6 flex gap-5 justify-center">
                        <button className="px-4 py-3 bg-blue-600 rounded-md">Learn More</button>
                        <button className="rounded-md px-3 py-2 text-sm bg-white md:text-base md:px-8 md:py-2 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Get In Touch</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerTwo;