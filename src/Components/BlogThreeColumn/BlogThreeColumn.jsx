import { useEffect } from "react";
import BlogSearch from "../BlogSearch/BlogSearch";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Subscription from "../Subscription/Subscription";
import {Helmet} from "react-helmet-async";

const BlogThreeColumn = () => {

    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination functionality
    const lastPage = currentPage * postsPerPage;
    const firstPage = lastPage - postsPerPage;
    const currentPostsPerPage = filteredPosts.slice(firstPage, lastPage);
    return (
        <section>
            <Helmet>
                <title>Blog - Aya</title>
            </Helmet>
            <div className="bg-blue-600 h-48 flex flex-col justify-center items-center text-white font-extrabold">
                <h1 className="text-center my-5">Blog</h1> 
                <p><Link to="/">Home</Link> / Blog</p>
            </div>
            <BlogSearch value={searchQuery} onChange={handleSearchQueryChange}></BlogSearch>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-5 lg:mx-32">
                {currentPostsPerPage.map((post) => (
                    <div key={post.id} className="flex flex-col rounded-md p-2">
                        <Link to='/single-post'>
                            <img src={post.postImage} className="rounded-md" alt={post.title} />
                            <h4 className="font-bold py-5">{post.title}</h4>
                        </Link>
                        <div className="flex justify-around items-center">
                            <img src={post.authorImage} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" alt={post.author} />
                            <p className="text-gray-500">{post.date}</p>
                        </div>
                    </div>
                ))}
            </div>
             {/* Pagination Section*/}
             <Pagination
                    totalPosts={posts.length}
                    postsPerPage={postsPerPage} 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                >
                </Pagination>
            <Subscription></Subscription>
        </section>
    );
};

export default BlogThreeColumn;