
const ProjectPagination = ({totalProjects, projectsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for(let i = 1; i<= Math.ceil(totalProjects/projectsPerPage); i++){
        pages.push(i);
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className='py-10 text-center'>
            <button
                onClick={handlePrevPage}
                className={currentPage === 1 ? 'pointer-events-none opacity-50 rounded px-6 py-2 bg-slate-100 text-slate-950 mr-2' : 'rounded px-6 py-2 bg-slate-100 text-slate-950 mr-2'}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? 'rounded mx-2 px-6 py-2 font-bold bg-blue-600 text-white mr-2' : 'rounded px-6 py-2 bg-slate-100 text-slate-950 mr-2'}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                onClick={handleNextPage}
                className={currentPage === pages.length ? 'pointer-events-none opacity-50 rounded px-6 py-2 bg-slate-100 text-slate-950 mr-2' : 'rounded px-6 py-2 bg-slate-100 text-slate-950 mr-2'}
                disabled={currentPage === pages.length}
            >
                Next
            </button>
        </div>
    );
};

export default ProjectPagination;