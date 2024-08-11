import React from 'react';
import Chatbot from './components/Chatbot';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'; // Import the About page
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Chatbot />
    </Router>
  );
};

export default App;
