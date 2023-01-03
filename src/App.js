
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mate from './components/Mate/Mate.js'


import Main from './components/Main/Main.js'
import MainDown from './components/Main/MainDown';
import DashboardMate from './components/DashboardMate/DashboardMate.jsx'
import EventDetail from './components/DashboardMate/MyEvents/EventDetail';
import SignupPage from './components/AuthMate/SignupPage/SignupPage';
import LoginPage from './components/AuthMate/LoginPage/LoginPage';

import Content from './components/DashboardMate/Content/Content';
import Construction from './components/DashboardMate/construction/construction';

function App() {
  const path = window.location.pathname; 
  console.log(path)
  return (
    <BrowserRouter> 
        
        
      <Routes>
        <Route path='/' element={<MainDown/>}/>
        <Route path='/signupMate' element={<SignupPage/>}/>
        <Route path='/loginMate' element={<LoginPage/>}/>
        <Route path='/Mate/*' element={<Mate />}/>
        <Route path='/construction' element={<Construction/>}/>
      </Routes>
      
   
     

    </BrowserRouter>
  );
}

export default App;
