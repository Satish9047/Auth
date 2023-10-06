import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className=" flex flex-col justify-center items-center  w-4/12  bg-[#FFE5E5] rounded-lg py-4 px-2">
        <div className=" text-4xl font-sans">Register</div>
        <form
          onSubmit={handleRegister}
          className=" flex flex-col w-10/12 px-1 py-2"
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            className="p-1 mb-1"
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            value={userName}
            className="p-1 mb-1"
            type="text"
            onChange={(ev) => setUserName(ev.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            className="p-1 mb-1"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <button type="submit" className="bg-[#FFBFBF] hover:bg-[#FFE5E5] active:bg-[#A8DF8E] p-1 my-4">
            Register
          </button>
        </form>
        <label>
          Already have account?{" "}
          <strong>
            <Link to={"/login"}>Click Here</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};
export default Register;
