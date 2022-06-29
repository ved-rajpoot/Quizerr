import React, { useEffect } from 'react'
import firebaseApp from '../FirebaseConfig/config'
const OneTimeDashboard = () => {

  const signOut = ()=>{
    console.log('signout button clicked');
    firebaseApp.auth().signOut().then(()=>{console.log('logged out successfully')}).catch((err)=>{console.log(err)});
  }

  return (
    <>
    <div>OneTimeDashboard</div>
    <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default OneTimeDashboard