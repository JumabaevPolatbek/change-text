import React from "react";
import "./App.css";
function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const p = document.querySelectorAll("p");
    window.addEventListener("click", (e) => {
      e.preventDefault();
      if ((e.target.textContent === "Special Button") & (count < 3)) {
        setCount(count + 1);
        p[count].textContent = "Delivered";
      }
    });
  }, [count]);
  return (
    <div className="container">
      <p>inprogress</p>
      <p>inprogress</p>
      <p>inprogress</p>
      <button>Special Button</button>
    </div>
  );
}
export default App;
