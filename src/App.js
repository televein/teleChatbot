import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ChatbotForm from './pages/chatbotform';
import Chat from './pages/chat';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Helmet>
        {/* Google Analytics tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XXKV8QRLX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6XXKV8QRLX');
          `}
        </script>
      </Helmet>

      <Router>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<ChatbotForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
