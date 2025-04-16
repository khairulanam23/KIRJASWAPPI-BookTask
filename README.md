# KirjaSwappi - Book Swapping App Frontend

This project implements a responsive Book Details interface for a book-swapping app called KirjaSwappi. The interface displays details of a book and the exchange conditions under which a user is willing to swap it.

## Features

- Responsive Book Details interface
- Dynamic exchange condition views:
  - Swap by Books (multiple books)
  - Swap by Books (single book)
  - Swap by Genres
  - Open for Offers
- Integration with KirjaSwappi API
- Error handling for API requests
- Loading states

## Tech Stack

- React (built with Vite)
- Tailwind CSS
- Axios for API integration

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repo-url]
cd INTERN-TASK
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
kirjaswappi/
├── public/
├── src/
│   ├── components/
│   │   ├── BookCondition.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BookDescription.jsx
│   │   ├── BookLanguage.jsx
│   │   ├── ExchangeCondition.jsx
│   │   ├── Header.jsx
│   │   ├── Location.jsx
│   │   ├── OfferedBy.jsx
│   │   ├── SwapBooks.jsx
│   │   ├── SwapGenres.jsx
│   │   └── OpenForOffers.jsx
│   ├── services/
│   │   └── api.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── ...
```

## API Integration

The app integrates with the KirjaSwappi API to fetch book data. The API key is included in the request headers as required by the API specification.

## Possible Improvements

- Add state management (Redux or Context API) for larger applications
- Implement user authentication
- Add unit tests
- Implement book swap functionality
- Add more animations and transitions for a better user experience

## Live Link
