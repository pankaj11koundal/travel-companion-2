import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import { getPlacesData } from './api';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('Restaurants');
    const [rating, setRating] = useState('');
    const [filterdPlaces, setFilterdPlaces] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating) 

        setFilterdPlaces(filteredPlaces);
    }, [rating])

    useEffect(() => {
        setIsLoading(true);

        getPlacesData(type, bounds.sw, bounds.ne).then(data => {
            if (type === "hotels") console.log(data);
            setPlaces(data);
            setFilterdPlaces([]);
            setIsLoading(false);
        })
    }, [type, coordinates, bounds]);

    return (
        <>
            <CssBaseline /> 
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{ width: '100%' }} >
                <Grid item xs={12} md={4}>
                    <List 
                        places={filterdPlaces.length ? filterdPlaces : places} 
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates} 
                        setBounds={setBounds} 
                        coordinates={coordinates} 
                        places={filterdPlaces.length ? filterdPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
