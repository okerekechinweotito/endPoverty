import { useState, useEffect } from "react";
import LoadingLogo from "../src/helper/loadingLogo/loadingLogo.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      return setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <h1>Coming Soon</h1>
          <h1>Coming Soon</h1>
          <h1>Coming Soon</h1>
          <h1>Coming Soon</h1>
          <h1>Coming Soon</h1>
          <h1>Coming Soon</h1>
        </div>
      ) : (
        <LoadingLogo />
      )}
    </>
  );
}

export default App;
