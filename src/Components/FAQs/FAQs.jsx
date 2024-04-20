const FAQs = ({ title, content,  isOpen, onClick }) => {
    return (
        <div className="border rounded mb-4">
      <div
        className="p-4 cursor-pointer flex justify-between items-center bg-white"
        onClick={onClick}
      >
        <span className="text-blue-600">{title}</span>
        <span className={`transition-transform transform ${isOpen ? 'rotate-180' : ''}`}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <p>{content}</p>
        </div>
      )}
    </div>
    );
};

export default FAQs;