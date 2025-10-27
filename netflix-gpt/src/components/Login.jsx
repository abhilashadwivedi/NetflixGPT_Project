import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 bg-gray-950 text-shadow-indigo-100 border-2 border-gray-400 rounded w-full"
        />
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-gray-950 text-shadow-indigo-100 border-2 border-gray-400 rounded w-full"
        />}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-950 text-shadow-indigo-100 border-2 border-gray-400 rounded w-full"
        />
        <button className="bg-red-700 p-4 my-6 text-red-800 rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
