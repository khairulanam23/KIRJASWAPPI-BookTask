import axios from 'axios';

const API_ENDPOINT = 'https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c';
const API_KEY = '3akimClnEXEa0AgAeuQtNqsf1Q6Bb38oTzkvv2keBa';

const headers = {
  'X-SILO-KEY': API_KEY,
  'Content-Type': 'application/json'
};

export const fetchBookDetails = async () => {
  try {
    const response = await axios.get(API_ENDPOINT, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
};