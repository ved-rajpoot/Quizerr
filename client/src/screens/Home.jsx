import React, { useState, useEffect } from 'react'
// import App from '../FirebaseConfig/config';
import firebase from 'firebase/compat/app';
import firebaseApp from '../FirebaseConfig/config';

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
		</>
	)
}

export default Home;
