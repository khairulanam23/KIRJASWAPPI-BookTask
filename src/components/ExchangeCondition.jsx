const ExchangeCondition = ({ type }) => {
  // Get label and color based on exchange type
  const getExchangeInfo = () => {
    switch (type) {
      case "byBooks":
        return { label: "Exchange for Specific Books", color: "indigo" };
      case "byGenres":
        return { label: "Exchange for These Genres", color: "purple" };
      case "openForOffers":
        return { label: "Open to All Offers", color: "blue" };
      default:
        return { label: "Exchange Condition", color: "indigo" };
    }
  };

  const { label, color } = getExchangeInfo();

  return (
    <div className="py-4 flex justify-center items-center border-t border-b border-gray-100">
      <div
        className={`flex items-center px-4 py-2 rounded-lg bg-${color}-50 text-${color}-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-${color}-600 mr-3`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
};

export default ExchangeCondition;