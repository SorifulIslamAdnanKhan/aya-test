
const BlogSection = () => {
    return (
        <section className="py-12">
            <div className="text-center max-w-2xl mx-auto p-2">
                <h2 className="font-bold mb-5">Latest Posts</h2>
                <p>Etiam et magna suscipit orci scelerisque iaculis. Duis feugiat euismod tortor, ac volutpat nulla. Etiam posuere libero lectus, vel ornare sem accumsan ac. Morbi fringilla felis et elit malesuada luctus. Sed at nulla sit amet ante fermentum viverra eu sed massa.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-5 lg:mx-32">
                <div className="flex flex-col rounded-md p-2">
                    <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80" className="rounded-md" alt="" />
                    <h4 className="font-bold py-5">
                        <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                    </h4>
                    <p className="text-gray-500">March 13, 2023</p>
                </div>
                <div className="flex flex-col rounded-md p-2">
                    <img src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="rounded-md" alt="" />
                    <h4 className="font-bold py-5">
                        <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                    </h4>
                    <p className="text-gray-500">July 13, 2023</p>
                </div>
                <div className="flex flex-col rounded-md p-2">
                    <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" className="rounded-md" alt="" />
                    <h4 className="font-bold py-5">
                        <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                    </h4>
                    <p className="text-gray-500">June 13, 2023</p>
                </div>
                <div className=" flex flex-col rounded-md p-2">
                    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="rounded-md" alt="" />
                    <h4 className="font-bold py-5">
                        <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                    </h4>
                    <p className="text-gray-500">April 13, 2023</p>
                </div>
                <div className="flex flex-col rounded-md p-2">
                    <img src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="rounded-md" alt="" />
                    <h4 className="font-bold py-5">
                        <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                    </h4>
                    <p className="text-gray-500">June 13, 2023</p>
                </div>
                <div className="flex flex-col rounded-md p-2">
                    <img src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="rounded-md" alt="" />
                    <h4 className="font-bold py-5">
                        <a href="#">Vestibulum scelerisque in turpis hendrerit vestibulum</a>
                    </h4>
                    <p className="text-gray-500">May 13, 2023</p>
                </div>
            </div>
            <div className="text-center">
                <button className="px-4 py-3 text-white hover:px-6 duration-500 bg-blue-600 rounded-md drop-shadow-2xl">See More Posts</button>
            </div>
        </section>
    );
};

export default BlogSection;