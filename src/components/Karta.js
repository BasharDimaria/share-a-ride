import { Map } from 'google-maps-react';
import React, { Component, useState,useEffect } from 'react';
import {GoogleMap,withScriptjs,withGoogleMap,Marker,Polyline} from 'react-google-maps'
import Mapstyle from '../styles/Mapstyle'
import { DirectionsRenderer } from "react-google-maps";
import polyline from "@mapbox/polyline"



const Karta= ({trip:{
        startLocation,
        destination
}}) =>
{
  
    const [routes,setRoutes]=useState([]);
    const polylines=[];
    const[cites,setCities]=useState([]);
    const temp=new Set();
    const WrappedMap=()=>{
        return(<GoogleMap defaultZoom={12} defaultCenter={{lat:57.7089, lng:11.9746}} defaultOptions={{styles:Mapstyle}} >
             <Polyline
                path={routes}
               
                options={{
                    strokeColor: '#FF0000',
                    strokeOpacity:0.5,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.5,
                    clickable: false,
                    draggable: false,
                    editable: false,
                    visible: true,
                    radius: 100,
                    geodesic: true,
                    zIndex: 2
    
                }}
            />
            </GoogleMap>)
    }
    
    const Mapdiv=withScriptjs(withGoogleMap(WrappedMap));
    
    useEffect(()=>{
        async function getRouteDiriction(){
            try{
                const response= await fetch("https://maps.googleapis.com/maps/api/directions/json?origin=Göteborg&destination=borås&key=AIzaSyCky7ZbbSvSHRgnfj_oGFLHG5Spc5IGoWo");
                const json=await response.json();
                const PointsCoords=polyline.decode(json.routes[0].overview_polyline.points)
                PointsCoords.map((point)=>(polylines.push({lat: point[0],lng:point[1]})));
                setRoutes(polylines);
                //putAllCities(polylines);
                //console.log(temp);
                
                }
            catch(error){
                console.log(error); 
            }
    
            
    
        }

        async function getAllCities(lat,lng){
            try{
                const response=await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCky7ZbbSvSHRgnfj_oGFLHG5Spc5IGoWo`);
                const json=await response.json();
                console.log(json);
                json.results.forEach(element => {
                    if(element.types[0]==="postal_code"){
                        if(!temp.has(element.formatted_address.split(',')[0]))
                            temp.add(element.formatted_address.split(',')[0]);
                    }

                });



            }catch(error){
                console.log(error); 
            }
        }

        async function putAllCities(polylines)
        {
           
            for (let index = 0; index < 3; index++) {
                    
                getAllCities(polylines[index].lat,polylines[index].lng);
            }
        }

        

       getRouteDiriction();
       //console.log(temp);
       //putAllCities(routes);
       //console.log(temp);
    },[])
   
    return(<div style={{width:'100vw',height:'100vh'}}>
        <Mapdiv  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCky7ZbbSvSHRgnfj_oGFLHG5Spc5IGoWo`} 
        loadingElement={<div style={{height:"100%"}}></div>} 
        containerElement={<div style={{height:"100%"}}></div>}
        mapElement={<div style={{height:"100%"}}></div>}
        ></Mapdiv>
    </div>)
}

export default Karta;
