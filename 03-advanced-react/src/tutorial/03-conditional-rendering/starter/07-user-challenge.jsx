import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    //normally connect to db or api
    setUser({ name: "vegan food truck" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {/* <h4>Hello there, {user}</h4>
      <button className="btn" onClick={login}>
        Logout
      </button>
      <h4>please login</h4>
      <button className="btn" onClick={logout}>
        Login
      </button> */}
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login.</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
