import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Trip from './Trip';

const Div=styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const BookedTrips = () =>{
    const Trips=[
        {
            tripid:"40020320",
            startLocation:"Kalmar",
            destination: "Göteborg",
            seatsAvailable: "4",
            startTime: "2020-09-08 T 20:20",
            price:"100",
            seats:"3",
            description:"This is Frist Examel"
        },
        {
            startLocation:"Umeå",
            destination: "Malmö",
            seatsAvailable: "3",
            startTime: "2020-07-08 T 21:20",
            price:"100",
            description:"This is Second Examel",
            seats:"3"

        },
        {
            startLocation:"kalrskrona",
            destination: "Helsignborg",
            seatsAvailable: "3",
            startTime: "2020-08-08 T 21:20",
            price:"250",
            description:"This is Third Examel",
            seats:"3"

        },
        {
            startLocation:"Uddevalla",
            destination: "Angred",
            seatsAvailable: "6",
            startTime: "2020-10-08 T 21:20",
            price:"300",
            description:"This is Fourth Examel",
            seats:"3"

        }
        ,
        {
            startLocation:"Uddevalla",
            destination: "Angred",
            seatsAvailable: "6",
            startTime: "2020-10-08 T 21:20",
            price:"300",
            description:"This is Fourth Examel",
            seats:"3"

        }
        ,
        {
            startLocation:"Uddevalla",
            destination: "Angred",
            seatsAvailable: "6",
            startTime: "2020-10-08 T 21:20",
            price:"300",
            description:"This is Fourth Examel",
            seats:"3"

        }
        ,
        {
            startLocation:"Uddevalla",
            destination: "Angred",
            seatsAvailable: "6",
            startTime: "2020-10-08 T 21:20",
            price:"300",
            description:"This is Fourth Examel",
            seats:"3"

        }
    ]

    return (
        <Div>
            {Trips.map((trip)=>(<Trip trip={trip}></Trip>))}
        </Div>
    )




}

export default BookedTrips;