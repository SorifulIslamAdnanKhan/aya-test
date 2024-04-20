
const BlogSearch = ({ value, onChange} ) => {
    return (
        <div className="mt-12 flex justify-center lg:justify-end items-center gap-3 px-5 lg:mx-32">
            <input
                value={value}
                onChange={onChange}
                type="search" placeholder="Search Blog..."
                className="border-solid border-2 border-blue-600 px-10 py-3 rounded-full" />
        </div>
    );
};

export default BlogSearch;