import React from "react";
import { useNavigate } from "react-router-dom";
import "./styleform.css";

const ChatbotForm = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    var na = document.getElementById("name");
    var input = na.value;

    localStorage.setItem("storageName", input);

    // Navigate to the `/chat` page.
    navigate('/chat');
  };

  return (
      <div className="fullbody">
        <div className="container">
        <form onSubmit={handleSubmit} action="/chatbot/index.html" method="get">
          <h1 className="headform">Welcome to VSBEC-IT</h1>
          <label>Enter your name:</label>
          <input
            type="text"
            name="val"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input type="submit" className="bt1" value="Start Chat" />
        </form>
        <h4>
          ©copyright by <span id="t">Tele</span><span>Vein</span>
        </h4>
        </div>
      </div>
  );
};

export default ChatbotForm;
