import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center  w-4/12  bg-[#FFE5E5] rounded-lg py-4 px-2">
        <div className=" text-4xl font-sans">Login</div>
        <form onSubmit={handleLogin} className=" flex flex-col w-10/12 px-1 py-2">
          <label htmlFor="email">Email</label>
          <input 
          id="email"
          value={email}
          type="email"
          className="p-1 mb-1"
          onChange={(ev) => setEmail(ev.target.value)} 
          />

          <label htmlFor="password">Password</label>
          <input
          id="password"
            value={password}
            type="password"
            className="p-1 mb-1"
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <button className="bg-[#FFBFBF] hover:bg-[#FFE5E5] active:bg-[#A8DF8E] p-1 my-4" type="submit">Login</button>
        </form>

        <label>
          Don't have account?{" "}
          <strong>
            <Link to={"/register"}>Click Here</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};
export default Login;
