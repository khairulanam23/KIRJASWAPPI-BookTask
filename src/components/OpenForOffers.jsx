const OpenForOffers = () => {
    return (
      <div className="mt-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="flex items-center bg-blue-50 rounded-md p-2 max-w-xs">
            <div className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium">Open to Offer</p>
              <p className="text-xs text-gray-600">Flexible exchange</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OpenForOffers;