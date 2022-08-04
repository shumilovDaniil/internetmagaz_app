import React, { useState } from "react";
import Popup from "../components/Popup";

const Cart = () => {
  const [togglePopup, setTogglePopup] = useState(false);

  return (
    <div>
      <button onClick={() => setTogglePopup(true)} className="p-2 bg-green-600">open popup</button>
      {togglePopup ? <Popup setTogglePopup={setTogglePopup} /> : ""}
    </div>
  );
};

export default Cart;