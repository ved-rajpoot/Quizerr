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

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path = "/dashboard" element={<UserDashboard/>}/>
        <Route path = "/create-quiz" element={<CreateQuiz/>}/>
        <Route path = "/created-successfully/:quizCode" element={<CreatedSuccessfully/>}/>
        <Route path = "/join-quiz" element={<JoinQuiz/>}/>
        <Route path = "/attempt-quiz/:quizCode" element={<AttemptQuiz/>}/>
        <Route path = "/attempt-blind-quiz/:quizCode" element={<AttemptBlindQuiz/>}/>
        <Route path = "/responses/:quizCode" element={<Responses/>}/>
      </Routes>
    </>
  );
}
export default App;
