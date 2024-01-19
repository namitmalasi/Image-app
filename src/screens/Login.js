import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // ============== Google Login Start here =====================
  const handleLogin = (e) => {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        localStorage.setItem("token", user);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  // ============== Google Login End here =======================

  // ============== Logout Start here ===========================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ============== Logout End here =============================
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        {user && (
          <Link to="/history">
            <button className="border-black border-4 p-2 rounded">
              History{" "}
            </button>
          </Link>
        )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        ) : (
          <div
            onClick={handleLogin}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img
              className="w-8"
              src="https://lofrev.net/wp-content/photos/2016/06/googles_new_logo.png"
              alt="googleLogo"
            />
            <span className="text-sm text-gray-900"> Sign in with Google</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
