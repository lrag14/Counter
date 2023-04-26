import { useState } from "react";

const Reset = ({ setCount }) => {
  return (
    <div className="container">
      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
export default Reset;
