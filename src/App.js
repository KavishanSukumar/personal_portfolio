import React, { useState, useEffect } from "react";
import Loading from "./pages/loading/Loading";
import Main from "./pages/main/Main";
import "./app.css";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // return <div className="App">{loading ? <Loading /> : <Main />}</div>;
  return (
    <div className="App">
      {" "}
      <Main />
    </div>
  );
}

export default App;
