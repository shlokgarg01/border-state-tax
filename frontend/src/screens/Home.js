import axios from "axios";
import React, { useEffect, useState } from "react";
import Constants from "../helpers/Constants";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      let response = await axios.get(`${Constants.BASE_URL}/api/v1/get_sms`);
      console.log("Messages - ", response.data.messages);
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Error while fetching messages - ", error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        Welcome!
      </h4>

      <ol>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ol>
    </div>
  );
}
