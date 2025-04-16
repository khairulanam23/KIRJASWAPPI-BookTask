import { useState, useEffect } from 'react';
import { fetchBookDetails } from './services/api';
import BookDetails from './components/BookDetails';

function App() {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getBookData = async () => {
      try {
        setLoading(true);
        const data = await fetchBookDetails();
        setBookData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch book data. Please try again later.');
        setLoading(false);
        console.error(err);
      }
    };
    
    getBookData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p>{error}</p>
          <button 
            className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {bookData && <BookDetails bookData={bookData} />}
    </div>
  );
}

export default App;