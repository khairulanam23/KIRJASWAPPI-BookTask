const OfferedBy = ({ user }) => {
    return (
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Offered by</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <span className="text-sm">{user?.name || 'Unknown User'}</span>
          </div>
          <div className="flex items-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-xs">{user?.positiveSwaps || 0}% Positive Swaps</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default OfferedBy;