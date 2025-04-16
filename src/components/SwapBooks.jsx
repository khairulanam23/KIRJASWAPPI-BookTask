const SwapBooks = ({ books = [] }) => {
    // If we have no books data, show default examples
    const displayBooks = books.length > 0 ? books : [
      {
        title: "Harry Potter and The Order of The Phoenix",
        author: "J. K. Rowling"
      },
      {
        title: "The Productive Muslim",
        author: "Mohammed Faris"
      }
    ];
  
    return (
      <div className="mt-4">
        <p className="text-center text-sm mb-3">
          {displayBooks.length > 1 ? 'Either one of these' : 'This book'}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {displayBooks.map((book, index) => (
            <div 
              key={index} 
              className="flex items-center bg-blue-50 rounded-md p-2 max-w-xs"
            >
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium">{book.title}</p>
                <p className="text-xs text-gray-600">By {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SwapBooks;