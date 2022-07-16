import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {};

export const getPlacesData = async (sw, ne) => {
    try {
        console.log(sw)
        console.log(ne)
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: ne.lat,
                tr_longitude: sw.lng,
                tr_latitude: ne.lng
            },
            headers: {
                "X-RapidAPI-Key": "b18f42fe48msh2508fcf3cb00acep1d3199jsne8f8dccc98b1",
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
