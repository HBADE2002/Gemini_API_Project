import React from "react";
import Chatbot from "./components/Chatbot";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
// Import other pages as needed

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Chatbot />
    </div>
  );
};

export default App;
