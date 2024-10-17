const key = import.meta.env.VITE_API_KEY;
 // Меняем URL в зависимости от наличия поиска

// Функция для получения URL и заголовков
export const getUrl = (page = 2, search = '') => {
    const apiUrl = search ? 'https://api.pexels.com/v1/search' : 'https://api.pexels.com/v1/curated'; 
    const searchParam = search ? `?query=${encodeURIComponent(search)}` : '?';  // Используем правильный параметр query для поиска
    return {
        url: `${apiUrl}${searchParam}&page=${page}&per_page=12`,
        headers: {
            Authorization: key,  // Передача ключа в заголовках
            'Content-Type': 'application/json',
        },
    };
};
