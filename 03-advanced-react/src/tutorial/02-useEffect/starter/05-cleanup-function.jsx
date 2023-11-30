import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <RandomComonent />}
    </div>
  );
};
const RandomComonent = () => {
  useEffect(() => {
    console.log("hmmm,this is interesting");
  }, []);
  return (
    <div>
      <h1>hello there</h1>
    </div>
  );
};
export default CleanupFunction;
