import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from './Components/SignIn/RegisterPage';
import SignInPage from './Components/SignIn/SignInPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
