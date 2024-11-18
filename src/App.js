import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatbotForm from './pages/chatbotform';
import Chat from './pages/chat';

import Contact from './pages/contact';


function App() {
    return (
        <div>
          <Router>
          <Routes>
            <Route path="/chat" element={<Chat/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/" element={<ChatbotForm/>} />
          </Routes>
          </Router>
        </div>
      );
    }
    
    export default App;
