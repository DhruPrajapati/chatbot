import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  return (
    <div className="p-4">
      <p className="font-bold p-4 text-3xl ">{message || "Loading..."}</p>
      <Button> click me</Button>
    </div>
  );
}

export default App;
