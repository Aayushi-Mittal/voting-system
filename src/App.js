import React from 'react';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import CreateEvent from './pages/CreateEvent'
import Vote from './pages/Vote'
import Results from './pages/Results'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> 
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="vote" element={<Vote />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
