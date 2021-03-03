import React, { useState, useEffect } from 'react';
import '../styles/FormStyle.css';

const SearchForm = ()=>{
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [datetime, setDatetime] = useState('');
    const [seats, setSeats] = useState('');

    const onSubmit=async(e) =>{
        e.preventDefault();
    
        const searchQuery= () =>{
            let query='';
            if(from!==''){
                query+="startLocation=" + from;
    
            }
            if(to!==''){
                query+="/destination=" + to;
    
            }
    
            if(datetime!==''){
                query+="/startTime=" + datetime;
    
            }
    
            if(seats!==''){
                query+="/seatsAvailable=" + seats;
    
            }
    
        
            return query;
        }
        let query=searchQuery();
        console.log(query);
        console.log("bashar");
          
      }

      return(
          
        <div class="SearchFormSection">
        <div class="info">
          <h2>Dela Din Resa </h2>
          <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
          <p>The Future Is Here</p>
        </div>
        <form  class="SearchForm" onSubmit={onSubmit}>
          <h2>Search for a trip </h2>
          <ul class="noBullet">
            <li>
              <label htmlFor="from"></label>
              <input type="text" className="inputFields" name="from" placeholder="From" value={from} onChange={(e)=>{setFrom(e.target.value)}} required/>
            </li>
            <li>
              <label htmlFor="to"></label>
              <input type="text" className="inputFields" name="to" placeholder="to" value={to} onChange={(e)=>{setTo(e.target.value)}}  required/>
            </li>
            <li>
              <label htmlFor="date"></label>
              <input type="datetime-local" className="inputFields"  name="date" placeholder="Date/Time" value={datetime} onChange={(e)=>setDatetime(e.target.value)} required/>
            </li>
            <li>
              <label htmlFor="seats"></label>
              <input type="number" className="inputFields"  name="number" placeholder="Seats" value={seats} onChange={(e)=>setSeats(e.target.value)} min="1" max="4" required/>
            </li>
            <li id="center-btn">
              <input type="submit" id="join-btn" name="join"  value="Search"/>
            </li>
          </ul>
        </form>
      </div>
          
      )
}

export default SearchForm;