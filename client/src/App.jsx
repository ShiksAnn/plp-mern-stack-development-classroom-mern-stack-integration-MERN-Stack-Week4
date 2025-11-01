import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.error(err);
        setMessage("❌ Connection failed. Check server.");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">Client → Server Test</h1>
      <p className="text-lg text-green-700">{message}</p>
    </div>
  );
}

export default App;
