const key = import.meta.env.VITE_API_KEY;
const helpUrl = import.meta.env.VITE_HELP_URL;
const api = import.meta.env.VITE_API_URL;


export const fetchWallpaper = async (page) => {
    console.log('start')
    try {
        console.log('try')
        const response = await fetch( helpUrl + encodeURIComponent(`${api}?apikey=${key}&page=${page}`), {
          headers: {
              'Content-Type': 'application/json',
          }  
        });  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.contents);
        return data
    } catch (error) {
        console.log(error.message); 
    } finally {
        console.log("stop fetching"); 
    }
};

