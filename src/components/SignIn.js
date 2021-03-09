import React, { useState, useEffect } from 'react';
import '../styles/FormStyle.css';

const SignIn = () => {

    return (
        <>

        <div class="SearchFormSection">
            <div class="info">
            <h2>Dela Din Resa</h2>
            <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
            </div>
            <form class="AddForm">
                <h2>Sign in</h2>
                <ul class="noBullet">
                    <li>
                        <label htmlFor="userNameLabel"></label>
                        <input type="text" className="inputFields" name="userNameLabel" placeholder="Username"></input>
                    </li>
                    <li>
                        <label htmlFor="passwordLabel"></label>
                        <input type="password" className="inputFields" name="passwordLabel" placeholder="Password"></input>
                    </li>
                    <li id="center-btn">
                        <input type="submit" id="join-btn" name="join"  value="Sign in"/>
                    </li>
                </ul>
            </form>
        </div>

        </>
    )
};

export default SignIn;
