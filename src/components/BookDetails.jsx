import { useState, useEffect } from 'react';
import Header from './Header';
import BookDescription from './BookDescription';
import ExchangeCondition from './ExchangeCondition';
import BookCondition from './BookCondition';
import BookLanguage from './BookLanguage';
import Location from './Location';
import OfferedBy from './OfferedBy';
import SwapBooks from './SwapBooks';
import SwapGenres from './SwapGenres';
import OpenForOffers from './OpenForOffers';

const BookDetails = ({ bookData }) => {
  const [exchangeType, setExchangeType] = useState('byBooks'); // Default to 'byBooks'
  
  useEffect(() => {
    if (bookData?.exchangeCondition?.type) {
      setExchangeType(bookData.exchangeCondition.type);
    }
  }, [bookData]);

  // Function to render the appropriate exchange view
  const renderExchangeView = () => {
    switch (exchangeType) {
      case 'byBooks':
        const books = bookData?.exchangeCondition?.books || [];
        return <SwapBooks books={books} />;
      case 'byGenres':
        const genres = bookData?.exchangeCondition?.genres || [];
        return <SwapGenres genres={genres} />;
      case 'openForOffers':
        return <OpenForOffers />;
      default:
        return null;
    }
  };

  // Function to handle exchange type change (for demo purposes)
  const handleExchangeTypeChange = (type) => {
    setExchangeType(type);
  };

  // Extract book data
  const {
    title = "Man's search for meaning",
    author = "Viktor Frankl",
    genres = ["Biography", "Autobiography", "Personal narrative"],
    description = "A brief synopsis or description of the book's content, providing potential swappers with an idea of what the book is about...",
    bookCondition = "Used Like New",
    language = "English",
    location = "Senate Square, Helsinki",
    offeredBy = {
      name: "Raisa Binte Hossain",
      positiveSwaps: 95
    }
  } = bookData || {};

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
      {/* Navigation controls to switch between different views (for demo purposes) */}
      <div className="flex justify-between p-2 bg-gradient-to-r from-indigo-100 to-purple-100">
        <button 
          className={`px-3 py-2 rounded-md transition-all duration-300 font-medium text-sm ${exchangeType === 'byBooks' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-indigo-700 hover:bg-indigo-50'}`}
          onClick={() => handleExchangeTypeChange('byBooks')}
        >
          Swap by Books
        </button>
        <button 
          className={`px-3 py-2 rounded-md transition-all duration-300 font-medium text-sm ${exchangeType === 'byGenres' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-indigo-700 hover:bg-indigo-50'}`}
          onClick={() => handleExchangeTypeChange('byGenres')}
        >
          Swap by Genre
        </button>
        <button 
          className={`px-3 py-2 rounded-md transition-all duration-300 font-medium text-sm ${exchangeType === 'openForOffers' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-indigo-700 hover:bg-indigo-50'}`}
          onClick={() => handleExchangeTypeChange('openForOffers')}
        >
          Open to Offer
        </button>
      </div>

      <Header title={title} exchangeType={exchangeType} />
      
      <div className="p-6">
        {/* Book Cover and Title Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-64 mb-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {bookData?.coverPhotoUrl ? (
              <img 
                src={bookData.coverPhotoUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600 text-white p-4 text-center font-medium">
                {title}
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
          <p className="text-center text-gray-600 italic mt-1">by {author}</p>
          
          {/* Genres */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {genres.map((genre, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                {genre}
              </span>
            ))}
          </div>
        </div>
        
        {/* Exchange Condition - with visual distinction */}
        <div className="mb-8">
          <ExchangeCondition type={exchangeType} />
          
          {/* Render the appropriate exchange view with a decorative container */}
          <div className="mt-4 p-4 border border-indigo-100 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
            {renderExchangeView()}
          </div>
        </div>
        
        {/* Book Description */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-1 h-6 bg-indigo-500 rounded-full mr-2"></span>
            About the Book
          </h3>
          <BookDescription description={description} />
        </div>
        
        {/* Book Condition and Language */}
        <div className="flex justify-between mt-6 mb-8">
          <div className="flex-1 mr-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Condition</h3>
            <BookCondition condition={bookCondition} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Language</h3>
            <BookLanguage language={language} />
          </div>
        </div>
        
        {/* Location with improved visual */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</h3>
          <Location location={location} />
        </div>
        
        {/* Offered By with enhanced styling */}
        <div className="mb-8 p-4 bg-indigo-50 rounded-lg">
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Book Owner</h3>
          <OfferedBy user={offeredBy} />
        </div>
        
        {/* More from this user */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <span className="w-1 h-6 bg-indigo-500 rounded-full mr-2"></span>
              More from this user
            </h3>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
            <div className="w-32 h-44 bg-gray-100 rounded-md shadow-md flex-shrink-0 hover:shadow-lg transition-shadow duration-300"></div>
            <div className="w-32 h-44 bg-gray-100 rounded-md shadow-md flex-shrink-0 hover:shadow-lg transition-shadow duration-300"></div>
            <div className="w-32 h-44 bg-gray-100 rounded-md shadow-md flex-shrink-0 hover:shadow-lg transition-shadow duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;