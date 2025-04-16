const SwapGenres = ({ genres = [] }) => {
    // If we have no genres data, show default examples
    const displayGenres = genres.length > 0 ? genres : [
      { name: "Thriller", description: "Any of this genre" },
      { name: "Non-Fiction", description: "Any of this genre" }
    ];
  
    return (
      <div className="mt-4">
        <p className="text-center text-sm mb-3">Either one of these</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {displayGenres.map((genre, index) => (
            <div 
              key={index} 
              className="flex items-center bg-blue-50 rounded-md p-2 max-w-xs"
            >
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium">{genre.name}</p>
                <p className="text-xs text-gray-600">{genre.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SwapGenres;