import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lat
            },
            headers: {
                // "X-RapidAPI-Key": process.env.ADVISOR_KEY,
                "X-RapidAPI-Key": process.env.RAPID_API_TRAVEL_ADVISOR_KEY,
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

// export const getWeatherData = async (lat, lng) => {
//     try {
//         if (lat && lng) {
//             const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1ecd4b0f503b5a4da674aa8891a1caac`);

//             return data;
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
