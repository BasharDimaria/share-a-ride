import React, { useState, useEffect } from 'react';
import '../styles/FormStyle.css';


const AddTrip = () => {

    const[from,setFrom]=useState('');
    const[to,setTo]=useState('');
    const[datetime,setDatetime]=useState('');
    const[seats,setSeats]=useState('');
    const [price, setPrice] =useState('');
    const [comments, setComments] = useState('');

    const onSubmit=async(e)=>{
        e.preventDefault();
        const trip= {
            startLocation:from,
            destination: to,
            seatsAvailable: seats,
            startTime: new Date(datetime),
            price:price,
            description:comments,
        }

        console.log(trip);
    }
    

    return (
        <div class="Addformsection">
        <div class="info">
          <h2>Dela Din Resa </h2>
          <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
          <p>The Future Is Here</p>
        </div>
        <form  class="AddForm" onSubmit={onSubmit}>
          <h2>Add a trip </h2>
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
              <input type="number" className="inputFields"  name="seats" placeholder="Seats" value={seats} onChange={(e)=>setSeats(e.target.value)} min="1" max="4" required/>
            </li>
            <li>
              <label htmlFor="price"></label>
              <input type="number" className="inputFields"  name="price" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} min="1" max="1000" required/>
            </li>
            <li>
              <label htmlFor="Comments"></label>
              <textarea  className="inputFields"  name="comments" placeholder="Comments" value={comments} onChange={(e)=>setComments(e.target.value)} rows="3" cols="35" required/>
            </li>
            <li id="center-btn">
              <input type="submit" id="join-btn" name="join"  value="Add"/>
            </li>
          </ul>
        </form>
      </div>
       

            
    )

};

export default AddTrip;









             

           
                
       
