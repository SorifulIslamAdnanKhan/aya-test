import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PortfolioSection = () => {
    return (
        <section className="py-12">
            <div className="text-center max-w-2xl mx-auto p-2">
                <h2 className="font-bold mb-5">Latest Projects</h2>
                <p>Morbi tincidunt rutrum magna, non pharetra elit consectetur vitae. Donec consequat eu neque in dignissim. Duis ullamcorper facilisis augue nec ornare. Nam et purus a erat pulvinar porttitor.</p>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-4 space-y-3 gap-4 py-12 px-5 lg:mx-32">
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" className="w-full" alt="portfolio-one">
                        <img src="https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" className="w-full" alt="portfolio-one" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1475746812396-2b046c18be0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="w-full" alt="portfolio-two">
                        <img src="https://images.unsplash.com/photo-1475746812396-2b046c18be0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="w-full" alt="portfolio-two" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1569041032620-2d0ee0b7b673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-three">
                        <img src="https://images.unsplash.com/photo-1569041032620-2d0ee0b7b673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-three" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80" className="w-full" alt="portfolio-four">
                        <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80" className="w-full" alt="portfolio-four" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80" className="w-full" alt="portfolio-five">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80" className="w-full" alt="portfolio-five" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" alt="portfolio-six">
                        <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" alt="portfolio-six" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-seven">
                        <img src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-seven" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1571415822965-c563f4535eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" className="w-full" alt="portfolio-eight">
                        <img src="https://images.unsplash.com/photo-1571415822965-c563f4535eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" className="w-full" alt="portfolio-eight" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-nine">
                        <img src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" alt="portfolio-nine" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="text-center">
                <button className="px-4 py-3 text-white hover:px-6 duration-500 bg-blue-600 rounded-md drop-shadow-2xl">View All Projects</button>
            </div>
        </section>
    );
};

export default PortfolioSection;