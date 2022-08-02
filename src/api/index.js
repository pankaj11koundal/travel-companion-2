import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
    const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    try {
        const { data: { data } } = await axios.get(url, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lat
            },
            headers: {
                "X-RapidAPI-Key": "8740909d40msh107398d60465c23p187e25jsnb200917dab28",
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
