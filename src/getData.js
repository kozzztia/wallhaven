export const fetchWallhavenImage = async (imageId) => {
    const apiUrl = `https://wallhaven.cc/api/v1/w/${imageId}`;
    const apiKey = 'Yt0oqU9au5nf2nMpeDXHcHyqdLAxtFoL'; // Ваш API ключ

    try {
        const response = await fetch(apiUrl, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Данные о картинке
    } catch (error) {
        console.error('Ошибка при получении данных с API:', error);
    }
};

// Использование функции:
 // Вставьте ID нужной картинки
