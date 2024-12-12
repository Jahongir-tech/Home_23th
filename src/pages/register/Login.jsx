import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slices/token-slice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const users = useSelector((s) => s.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    let existUser = users.find((item) => item.username === user.username);

    if (existUser) {
      if (existUser.password === user.password) {
        dispatch(signIn("testToken"));
        navigate("/admin");
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="border bg-white text-black  w-full max-w-md p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6">Welcome back</h2>
        <p className="text-center text-gray-400 mb-8">
          Sign in 
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            className="border bg-white rounded-lg py-3 px-4 focus:ring-black-300 text-black placeholder-gray-400"
            placeholder="Username"
            type="text"
            required
            name="username"
          />
          <input
            className="border bg-white rounded-lg py-3 px-4 focus:ring-black-300  text-black placeholder-gray-400"
            placeholder="Password"
            type="password"
            required
            name="password"
          />
          <button className="text-white font-bold bg-blue-400 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
