import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetail/PlaceDetails';


const List = ({ places}) => {
    const classes = useStyles();
    const [type, setType] = useState('Restaurants');
    const [rating, setRating] = useState('');
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurant, Hotels and Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="Restaurants">Restaurants</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="3.0">above 3.0</MenuItem>
                    <MenuItem value="4.0">above 4.0</MenuItem>
                    <MenuItem value="4.5">above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => 
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default List;