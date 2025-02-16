import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Timetable from './components/Timetable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
}

export default App;
