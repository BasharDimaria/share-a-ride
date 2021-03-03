import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';


const Section=styled.section`
margin-top:20px;
margin-right:auto;
margin-left:auto;
width:700px;
height:695px;
box-shadow: 0 0 55px rgba(black, .6);
border-radius: 20px;
background-color: rgba(20, 40, 40, .8);
background-blend-mode:darken;
overflow:hidden;
justifyContent:center;
box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
`;

const Header=styled.div`

margin:100px 130px;


`;

const Img=styled.img`
width:200px;
height:200px;
border-radius: 80px;
margin:0px 140px;


`;

const H2=styled.h2`
display: flex;
font-size: 3rem;
display: flex;
margin: 3rem 4.5rem;
color:#E0EBE7;

`;

const ButtonsDiv=styled.div`
display: block;
margin: 1rem 5rem;

`;

const Button=styled.button`
margin: 1rem 5rem;
font-size: 18px;
width:250px;
height:40px;
color: white;
background: rgba(20, 20, 20, .6);
border-radius: 30px;
appearance: none;
border: 1px solid rgba(10, 180, 180, 1);
outline: none;
cursor: pointer;
padding: 0rem 3rem;
font-family: Kufam, sans-serif;
font-weight: 400;
transition: all .4s ease-in-out;
&:hover {
    background-color: #5745a3;
    color:#E0EBE7;

}



`;

const ButtonAndH2Div=styled.div`
margin: 1rem -3rem;

`;
const MinSida=() =>{
    const UserData={
        FirstName:"Bashar",
        LastName:"Duamirieh",
        Email:"b-theviper2011@hotmail.com",
        Phone:"0704569556",
        Url:"https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/130813202_3572717809475166_5309569823127598000_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=Gq7-YrmuUhgAX82ye6q&_nc_ht=scontent-arn2-1.xx&oh=da8d7375239d58ea204a869165505dc6&oe=60644431"

    }

    return (

        <Section>
        <Header>
            <div>
               <Img  src={UserData.Url}></Img>
            </div>
            <ButtonAndH2Div>
                <H2>{UserData.FirstName} {UserData.LastName}</H2>
                <ButtonsDiv>
                    <Button >Account Setting</Button>
                    <Button >Booked Trips</Button>
                    <Button>Created Tips</Button>

                </ButtonsDiv>
            </ButtonAndH2Div>
        </Header>
        </Section>

 )

    
}

export default MinSida
