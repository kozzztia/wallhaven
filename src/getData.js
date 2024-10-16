const key = import.meta.env.VITE_API_KEY;


import axios from 'axios';
const apiUrl = 'https://api.pexels.com/v1/curated';

export const fetchWallpaper = async (page = 1, perPage = 10) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: key, // передаем API ключ через headers
      },
      params: {
        page: page,
        per_page: perPage,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Pexels images:', error);
    return null;
  }
};

