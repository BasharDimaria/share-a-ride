import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/CardDesign.css';
import {
    User
  } from 'react-feather';



const Trip = ({
    trip:{
        tripid,
        startLocation,
        destination,
        startTime,
        price,
        seats,
        description

},
})=>{

    return(<div>
<div class="trip-container">
	<div class="trip">
		<div class="trip-preview">
			<h6>Trip</h6>
			<h2>{startTime}</h2>
			<p>{price} Kr</p>
		</div>
		<div class="trip-info">
			<h4>Seats: {seats}<User></User></h4>
			<h2>{startLocation} -to- {destination}</h2>
            <p>{description}</p>
			<button class="btn">Cancel</button>
		</div>
	</div>
</div>
        </div>
        
    )


}

export default Trip;