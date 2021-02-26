import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';


const sharedStyles= css `

background: none;
outline: none;
border: 1px;
border-style: solid;
border-radius: 5px;
padding: 0.5rem;
font-family: Kufam, sans-serif;
font-weight: 400;
color: #707386;
transition: color 0.2s, border-color 0.2s;
&:hover {
    color: #0D9DD6;
}

&:focus {
    color:#0D9DD6;
}

&.field-error {
    border-color: #8c4c4c;
}


`;

const StyledFormWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;



`;

const StyledForm=styled.form `
display: flex;
flex-direction: column;
background-color:#DFE6E2;
padding: 20px;
margin: 30% auto;
width: 90%;
max-width: 26rem;
border-radius: 50px;
box-shadow: -10px 10px 40px 0px rgba(10,10,10,0.75);


`;

const StyledInput=styled.input `
${sharedStyles}
`;



const StyledButton=styled.button `
display:block;
background-color:#6F9CE8;
color:#fff;
font-size:.9rem;
border:0px;
border-radius:15px;
height:40px;
padding:0 20px;
cursor:pointer;
box-sizing:border-box;
margin-top:10px


`;

const StyledDiv=styled.div `
display: flex;
width: 100%;
justify-content: space-between;
margin-top: 20px;

`;

const StyledDiv2=styled.div  `
display: flex;
flex-direction: column;
flex: 1;
&:nth-child(2) {
    margin-left:20px;
  }
`;


const SearchForm = () => {
const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [datetime, setDatetime] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');

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

        if(price!==''){
            query+="/price=" + price;

        }
    
        return query;
    }
    let query=searchQuery();
    console.log(query);
    console.log("bashar");
      
  }
 

    return (
        <>
       
        <StyledFormWrapper>
            <StyledForm onSubmit={onSubmit}>
                <h2>Search Form</h2>
                
                <label htmlFor="fromLabel">From</label>
                <StyledInput 
                type="text"
                 name="fromLabel"
                 onChange={(e)=>setFrom(e.target.value)}
                 value={from}
                 />
               
               
                <label htmlFor="toLabel">To</label>
                <StyledInput 
                type="text" 
                name="toLabel"
                onChange={(e)=>setTo(e.target.value)}
                value={to}

                ></StyledInput>
                
                
                <label htmlFor="datetime">Date/time</label>
                <StyledInput 
                type="datetime-local" 
                name="datetime"
                onChange={(e)=>setDatetime(e.target.value)}
                 value={datetime}
                />
                
                <StyledDiv>
                <StyledDiv2>
                <label htmlFor="price">Price</label>
                <StyledInput 
                type="number" 
                min="0" 
                max="1000"
                onChange={(e)=>setPrice(e.target.value)}
                 value={price}
                ></StyledInput>
                </StyledDiv2>

                <StyledDiv2>
                <label htmlFor="seats">Seats</label>
                <StyledInput 
                type="number" 
                min="1" 
                max="4"
                onChange={(e)=>setSeats(e.target.value)}
                value={seats}
                ></StyledInput>
                </StyledDiv2>
                </StyledDiv>

                <StyledButton type="submit">Search</StyledButton>

            </StyledForm>

        </StyledFormWrapper>
        </>
        
    )

};

export default SearchForm;








