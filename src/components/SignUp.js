import React, { useState, useEffect } from 'react';
import '../styles/FormStyle.css';

const SignUp = () => {

    return (
        <>

        <div class="SearchFormSection">
            <div class="info">
            <h2>Dela Din Resa</h2>
            <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
            </div>
            <form  class="AddForm">
                <h2>Sign up</h2>
                <ul class="noBullet">
                    <li>
                        <label htmlFor="firstNameLabel"></label>
                        <input type="text" className="inputFields" name="firstNameLabel" placeholder="First name"></input>
                    </li>
                    <li>
                        <label htmlFor="lastNameLabel"></label>
                        <input type="text" className="inputFields" name="lastNameLabel" placeholder="Last name"></input>
                    </li>
                    <li>
                        <label htmlFor="emailLabel"></label>
                        <input type="text" className="inputFields" name="emailLabel" placeholder="Email"></input>
                    </li>
                    <li>
                        <label htmlFor="userNameLabel"></label>
                        <input type="text" className="inputFields" name="userNameLabel" placeholder="Username"></input>
                    </li>
                    <li>
                        <label htmlFor="passwordLabel"></label>
                        <input type="password" className="inputFields" name="passwordLabel" placeholder="Password"></input>
                    </li>
                    <li id="center-btn">
                        <input type="submit" id="join-btn" name="join"  value="Sign up"/>
                    </li>
                </ul>
            </form>
        </div>

        </>
    )
};

export default SignUp;
