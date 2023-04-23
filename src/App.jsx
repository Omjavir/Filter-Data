import { useState } from "react";
import Data from "./data/Data";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

function App() {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((item) => item.category))];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
          <Buttons menuItems={menuItems} setItem={setItem} />
          <Card item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
