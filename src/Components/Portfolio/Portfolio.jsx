import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectPagination from '../ProjectPagination/ProjectPagination';
import Subscription from '../Subscription/Subscription';
import {Helmet} from "react-helmet-async";

const Portfolio = () => {

    const [projects, setProjects] = useState([]);
    const [projectCategories, setProjectCategories] = useState([]);
    const [allProjectslData, setAllProjectslData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All Work');

    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(9);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setAllProjectslData(data);

                setProjectCategories([...new Set(data.map((category) => category.category))]);
            });
    }, []);



    const projectFilter = (selectedCategory) => {
        if (selectedCategory === 'All Work') {
            setProjects(allProjectslData);
        } else {
            const filteredProjects = allProjectslData.filter((project) => project.category === selectedCategory);
            setProjects(filteredProjects);
        }
    };

    // Pagination functionality
    // Calculate filtered projects based on the active category
    const filteredProjects = activeCategory === 'All Work' ? projects : projects.filter(project => project.category === activeCategory);

    // Calculate firstPage and lastPage based on the filtered projects
    const lastPage = currentPage * projectsPerPage;
    const firstPage = lastPage - projectsPerPage;
    const currentProjectsPerPage = filteredProjects.slice(firstPage, lastPage);

    return (
        <section>
            <Helmet>
                <title>Portfolio - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">Portfolio</h1>
                <p><Link to="/">Home</Link> / Portfolio</p>
            </div>
            <div className="text-center max-w-2xl mx-auto p-2 my-12">
                <h2 className="font-bold mb-5">Latest Projects</h2>
                <p className="leading-loose">Morbi tincidunt rutrum magna, non pharetra elit consectetur vitae. Donec consequat eu neque in dignissim. Duis ullamcorper facilisis augue nec ornare. Nam et purus a erat pulvinar porttitor.</p>
            </div>
            <div className="px-5 lg:mx-32">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    <button
                        onClick={() => { setProjects(allProjectslData); setActiveCategory('All Work'); setCurrentPage(1); }}
                        className={`rounded-md px-3 py-2 text-sm md:text-base md:px-8 md:py-2 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500 ${activeCategory === 'All Work' ? '!bg-blue-600 text-white' : 'bg-transparent'}`}
                    >
                        All Work
                    </button>
                    {
                        projectCategories.map((category) => (
                            <button
                                onClick={() => { projectFilter(category); setActiveCategory(category); setCurrentPage(1); }}
                                key={category}
                                className={`rounded-md px-3 py-2 text-sm md:text-base md:px-8 md:py-2 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500 ${activeCategory === category ? '!bg-blue-600 text-white' : ''}`}>
                                {category}
                            </button>
                        ))
                    }
                </div>
                <div className="columns-1 md:columns-2 lg:columns-4 space-y-3 gap-4 py-12">
                    {
                        currentProjectsPerPage.map((project) => (
                            <div className="relative group" key={project.id}>
                                <img src={project.projectImage} className="w-full" alt="portfolio-one" />
                                <div className="hidden group-hover:block absolute top-0 left-5 w-full h-full">
                                    <h3 className="font-bold text-white my-5">{project.description}</h3>
                                    <Link to="/portfolio-details"><button className="px-4 py-3 text-white hover:px-6 duration-500 bg-blue-600 rounded-md drop-shadow-2xl">View Project</button></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ProjectPagination
                    totalProjects={filteredProjects.length}
                    projectsPerPage={projectsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                >
                </ProjectPagination>
            </div>
            <Subscription></Subscription>
        </section>
    );
};

export default Portfolio;