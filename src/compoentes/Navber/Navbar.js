import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="container mx-auto my-auto text-decoration-none text-center">
      <Link className="text-decoration-none ml-2" to="/home">
        Home
      </Link>
      <Link className="text-decoration-none ml-2" to="/uploadPd">
        Upload Products
      </Link>
      <Link className="text-decoration-none ml-2" to="/order">
        Order
      </Link>
      {user ? (
        <button onClick={() => signOut(auth)}>Sign Out</button>
      ) : (
        <button className="btn btn-link text-center">
          <Link to="/signIn">Sign In</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
