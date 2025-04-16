const BookLanguage = ({ language }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md mb-1">
          <div className="text-xl font-bold">EN</div>
        </div>
        <p className="text-xs text-center">Book Language</p>
        <p className="text-xs font-medium text-center">{language}</p>
      </div>
    );
  };
  
  export default BookLanguage;