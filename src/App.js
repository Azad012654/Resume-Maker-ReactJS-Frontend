
import './App.css';
import PDFGenerator from './Components/PDFGenerator';
import Homepage from './Components/HomePage/Homepage'
import Login from './Components/LogInPage/Login';
import Header from './Components/HomePage/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import { Link, Route ,Routes, Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Layout from './Components/Layout';
// import isUserLoggedIn from './auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './Utills/Firebase'


function App() {
  const navigate = useNavigate();
  const [user, loading]=useAuthState(auth);
  console.log("Hi")
  

  return (
    <div className="App">
      {/* <PDFGenerator /> */}
      
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path="/pdf-generator" element={<PDFGenerator />} />
      {/* { user ? ( */}
      <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Homepage />}
        />
      {/* ) : alert("Log") */}
      {/* } */}
      
      </Routes>
    </div>
  );
}

export default App;
