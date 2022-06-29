import React, { useState, useEffect } from 'react'
// import App from '../FirebaseConfig/config';
import firebase from 'firebase/compat/app';
import firebaseApp from '../FirebaseConfig/config';
// import {style}
import './Home.css';
const Home = () => {

	const GoogleSignin = ()=>{
		const provider = new firebase.auth.GoogleAuthProvider(); 
		firebaseApp.auth().signInWithPopup(provider)
		.then((res)=>{
			console.log(res.user);
			console.log(res);
		})
		.catch((err)=>console.log(err));
	}
	const Facebook_signin = ()=>{
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then((res)=>{console.log(res)})
		.catch((err)=>{console.log(err)});
	}
	const Email_signin = ()=>{
		const provider = new firebase.auth.EmailAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then((res)=>{console.log(res)})
		.catch((err)=>{console.log(err)});
	}
	return (
		<>
			<h1> Hello world</h1>
			<button onClick={GoogleSignin}>Sign in with Google</button>
			<button onClick={Facebook_signin}>Sign in with Facebook</button>
			<button onClick={Email_signin}>Sign in with Email</button>

			<div className="login">
            <h1>Login</h1>
            <input type="text" name="email"  placeholder="Enter your Email"></input>
            <input type="password" name="password"   placeholder="Enter your Password" ></input>
            <div className="button" >Login</div>
            <div>or</div>
            <div className="button" >Register</div>
        </div>
		</>
	)
}

export default Home;
