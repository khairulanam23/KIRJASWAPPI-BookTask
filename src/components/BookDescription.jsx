import { useState } from 'react';

const BookDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Show only first 100 characters if not expanded
  const displayText = expanded ? description : `${description.substring(0, 100)}...`;
  
  return (
    <div className="mt-6">
      <h3 className="font-medium mb-2">Book Description</h3>
      <p className="text-sm text-gray-700">
        {displayText}
        {!expanded && (
          <button 
            className="text-blue-500 ml-1"
            onClick={() => setExpanded(true)}
          >
            More
          </button>
        )}
      </p>
    </div>
  );
};

export default BookDescription;