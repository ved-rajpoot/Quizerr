import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import {Routes,Route} from 'react-router-dom';
import UserDashboard from './screens/UserDashboard';
import CreateQuiz from './screens/CreateQuiz';
import CreatedSuccessfully from './screens/CreatedSuccessfully';
import JoinQuiz from './screens/JoinQuiz';
import AttemptQuiz from './screens/AttemptQuiz';
import AttemptBlindQuiz from './screens/AttemptBlindQuiz';
import Responses from './screens/Responses';
import OneTimeDashboard from './screens/OneTimeDashboard';
import firebaseApp from './FirebaseConfig/config';

import { useState, useEffect } from 'react';
const App = () => {
  const [user,setUser] = useState({});
  
  firebaseApp.auth().onAuthStateChanged((firebaseuser)=>{
    console.log(firebaseuser);
    if(firebaseuser) return setUser(firebaseuser);
    setUser(null);
  })
  return (
    <>
    {
      !user ? <Home/>:
      <Routes>
        <Route exact path="/" element={<OneTimeDashboard/>} />
        <Route path = "/dashboard" element={<UserDashboard/>}/>
        <Route path = "/create-quiz" element={<CreateQuiz/>}/>
        <Route path = "/created-successfully/:quizCode" element={<CreatedSuccessfully/>}/>
        <Route path = "/join-quiz" element={<JoinQuiz/>}/>
        <Route path = "/attempt-quiz/:quizCode" element={<AttemptQuiz/>}/>
        <Route path = "/attempt-blind-quiz/:quizCode" element={<AttemptBlindQuiz/>}/>
        <Route path = "/responses/:quizCode" element={<Responses/>}/>
      </Routes>
    }
    </>
  );
}
export default App;
